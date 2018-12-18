* * *

# Getting the Vault API into Fargate

* * *

When I sat down to start building the Vault project there was a number of places I could have chosen to start. I could have started building the fancy [React](https://reactjs.org/) based UI, or I could have started by writing [Terraform](https://www.terraform.io/) and putting some resources in my AWS account, things such as a [DynamoDB](https://aws.amazon.com/dynamodb/) table, or an [S3](https://aws.amazon.com/s3/) bucket.


After a bit of thought I settled on getting an API up and running, which I could then use later, to test persisting objects into DynamoDB and S3, and I could tweak/modify as I needed to.


I was also keen to put the Vault API into [Fargate](https://aws.amazon.com/fargate/) because up until now I've only been using the classic [EC2](https://aws.amazon.com/ec2/) version of Amazon Elastic Container Service or [ECS](https://aws.amazon.com/ecs/) for short. 

Whilst this works nicely, it does include additional management overhead because you have to maintain an application container host to house all your containerised apps or tasks. 

Fargate is a little closer to the Serverless/[Lambda](https://aws.amazon.com/lambda/) model where you pass it your app and then Amazon make sure that it's running `somewhere` and you don't need to worry about where that is!


### What resources are required 


The pattern I usually follow for most apps is this.

1.  A request comes into the load balancer.
    
2.  A rule is activated based on the `path` of the request.
    
3.  The traffic is then redirected to the target group, identified by the rule.
    
4.  The target group identifies the container/port to forward traffic to, inside the `application-container-host`
    

This pattern doesn't really change much as far as Fargate is concerned, only that our app no longer runs inside the `application-container-host` instead it's just running somewhere in Fargate.


Below I am going to list all the resources required, to get an app running in Fargate using the pattern above.

-   Load Balancer(s) / Listener Rule / Target Group
    
-   Security Group(s)
    
-   IAM Role / IAM Policies
    
-   ECR Repository & Policy
    
-   ECS Cluster & Service & Task Definition
    

#### Load Balancer

I actually use 2x load balancers. Firstly a `public` load balancer, which receives the request from the internet. This then routes traffic to the `private` load balancer, which in turn directs the traffic to the containerised app.

I am going to assume that you already have this in place, and instead just detail how traffic gets from the `private` load balancer to the app.

#### Listener Rule

So first of all we need to be able to reference the existing `private` load balancer. We do this by using a couple of terraform data sources.

```
data "aws_lb" "private-lb" {
  name = "lb-private"
}

data "aws_lb_listener" "private" {
  load_balancer_arn = "${data.aws_lb.private-lb.arn}"
  port              = 443
}
```

Once we have these, we can create a new `aws_lb_listener_rule` for vault-api.

```
resource "aws_lb_listener_rule" "vault-api" {
  listener_arn = "${data.aws_lb_listener.private.arn}"
  priority     = 1

  action {
    type             = "forward"
    target_group_arn = "${aws_lb_target_group.vault-api.arn}"
  }

  condition {
    field  = "path-pattern"
    values = ["/vault*"]
  }
}
```

#### Target Group

Next we create the `aws_alb_target_group` that the `aws_alb_listener_rule` is pointing to. Notice the target type is `ip` rather than `instance`. This might catch you out if you're also coming from the classic EC2/ECS world. Remember we have no fixed instances as such to route to in the world of Fargate.

```
resource "aws_lb_target_group" "vault-api" {
  name        = "vault-api"
  protocol    = "HTTP"
  port        = "80"
  vpc_id      = "${data.aws_vpc.vpc.id}"
  target_type = "ip"

  health_check {
    path                = "/vault"
    port                = "80"
    healthy_threshold   = 5
    unhealthy_threshold = 2
    timeout             = 5
    interval            = 30
    protocol            = "HTTP"
    matcher             = "200"
  }
}
```

Note: Because this lives inside of a [VPC](https://aws.amazon.com/vpc/) we need to look this up using a terraform data source also.

```
data "aws_vpc" "vpc" {
  tags {
    Name = "vpc-name-goes-here"
  }
}
```

#### Security Groups

Below I define a new `aws_security_group` resource which only accepts traffic that comes into container via the `private` load balancer.

```
resource "aws_security_group" "ecs_tasks" {
  name        = "vault-ecs-tasks"
  description = "allow inbound access from the ALB only"
  vpc_id      = "${data.aws_vpc.vpc.id}"

  ingress {
    protocol        = "tcp"
    from_port       = "80"
    to_port         = "80"
    security_groups = ["${data.aws_security_group.private-lb-security-group.id}"]
  }

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }
}
```

Note: This does reference another existing security group `private-lb-security-group`. I will leave this out again for brevity because I assume you will already have configured such rules in your own load balancers.

#### IAM Role

Next I am going to build up an `aws_iam_role`, that the container task will use when running.

```
resource "aws_iam_role" "vault-role" {
  name = "vault-api-role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": [
          "ecs.amazonaws.com",
          "ecs-tasks.amazonaws.com"
        ]
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}
```

#### IAM Policies

Next we attach a few `aws_iam_role_policy` objects to the `aws_iam_role` we just created. These just set up the basic things for now. Such as being able to access the ECR, some EC2 interfaces, the load balancer and cloudwatch.

```
resource "aws_iam_role_policy" "ecr" {
  name = "vault-api-ecr"
  role = "${aws_iam_role.vault-role.name}"
  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "ecr:*"
      ],
      "Effect": "Allow",
        "Resource": [
          "*"
      ]
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "vpc" {
  name = "vault-api-vpc"
  role = "${aws_iam_role.vault-role.name}"
  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "ec2:CreateNetworkInterface",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DeleteNetworkInterface"
      ],
      "Effect": "Allow",
        "Resource": [
          "arn:aws:ec2:${var.region}:${data.aws_caller_identity.current.account_id}:vpc/*"
      ]
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "lb-access" {
  name = "vault-api-lb"
  role = "${aws_iam_role.vault-role.name}"
  policy = <<EOF
{	
  "Version": "2012-10-17",	
  "Statement": [	
    {	
      "Action": [	
        "elasticloadbalancing:*"	
      ],	
      "Effect": "Allow",	
        "Resource":"*"
    }	
  ]	
}
EOF
}

resource "aws_iam_role_policy" "cloudwatch" {
  name = "vault-api-cloudwatch"
  role = "${aws_iam_role.vault-role.name}"
  policy = <<EOF
{	
  "Version": "2012-10-17",	
  "Statement": [	
    {	
      "Action": [
        "logs:*",
        "cloudwatch:*"
      ],
      "Effect": "Allow",
        "Resource": [
            "arn:aws:logs:${var.region}:${data.aws_caller_identity.current.account_id}:*"
      ]
    }	
  ]	
}
EOF
}
```

Note: There is another new data source here `data.aws_caller_identity.current.account_id` which can be found like this:

```
data "aws_caller_identity" "current" {}
```

That's all there is to it. It just gives you access details of your AWS account such as AccountId.

#### ECR Repository 

In order for ECS to run a task, it needs to pull the image from the ECR.  You can create a new `aws_ecr_repository` like so.

```
resource "aws_ecr_repository" "repo" {
  name = "vault-api"
}
```

#### ECR Policy 

You then grant permissions and image lifecycle policies as such.

```
resource "aws_ecr_repository_policy" "policy" {
  repository = "${aws_ecr_repository.repo.name}"

  policy = <<EOF
{
    "Version": "2008-10-17",
    "Statement": [
        {
            "Sid": "new policy",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "ecr:GetDownloadUrlForLayer",
                "ecr:BatchGetImage",
                "ecr:BatchCheckLayerAvailability",
                "ecr:PutImage",
                "ecr:InitiateLayerUpload",
                "ecr:UploadLayerPart",
                "ecr:CompleteLayerUpload",
                "ecr:DescribeRepositories",
                "ecr:GetRepositoryPolicy",
                "ecr:ListImages",
                "ecr:DeleteRepository",
                "ecr:BatchDeleteImage",
                "ecr:SetRepositoryPolicy",
                "ecr:DeleteRepositoryPolicy"
            ]
        }
    ]
}
EOF
}

resource "aws_ecr_lifecycle_policy" "policy" {
  repository = "${aws_ecr_repository.repo.name}"

  policy = <<EOF
{
    "rules": [
        {
            "rulePriority": 1,
            "description": "Keep last 5 images",
            "selection": {
                "tagStatus": "tagged",
                "tagPrefixList": ["v"],
                "countType": "imageCountMoreThan",
                "countNumber": 5
            },
            "action": {
                "type": "expire"
            }
        }
    ]
}
EOF
}
```

#### ECS Cluster 

For this example I have created a brand new `aws_ecs_cluster` for my Fargate apps.

```
resource "aws_ecs_cluster" "fargate-cluster" {
  name = "fargate-cluster"
}
```

You don't need to do this. ECS already creates a nice logical grouping of Fargate / EC2 apps running in a cluster. But for the purposes of this blog post, that's our cluster.

#### ECS Service

Adding a `aws_ecs_service` to our cluster is quite easy too. The terraform below is fairly straight forward.

```
resource "aws_ecs_service" "vault-api" {
  name                              = "vault-api"
  cluster                           = "${aws_ecs_cluster.fargate-cluster.id}"
  task_definition                   = "${aws_ecs_task_definition.definition.arn}"
  launch_type                       = "FARGATE"
  desired_count                     = 2
  health_check_grace_period_seconds = 30

  network_configuration {
    security_groups = [
      "${aws_security_group.ecs_tasks.id}"
    ]
    subnets         = ["${data.aws_subnet_ids.private.ids}"]
  }

  load_balancer {
    container_name   = "vault-api"
    container_port   = 80
    target_group_arn = "${aws_lb_target_group.vault-api.arn}"
  }
}

```

#### ECS Task Definition

This `aws_ecs_task_definition` is the final piece of the puzzle. This is the task which will be spun up inside of Fargate. This dictates everything from the scale of the cpu/ram, to the permissions the app has. It contains the VPC configuration and networking type.

Notice the networking type is `awsvpc`. This is the only permitted networking configuration type in Fargate.

Cloudwatch logging is different here too, compared to EC2 ECS. Pay attention to the `logConfiguration` section for this.

```
resource "aws_ecs_task_definition" "definition" {
  family                   = "vault-api"
  network_mode             = "awsvpc"
  cpu                      = 256
  memory                   = 512
  requires_compatibilities = ["FARGATE"]
  execution_role_arn       = "${aws_iam_role.vault-role.arn}" 
  task_role_arn            = "${data.aws_iam_role.ecs-task-execution-role.arn}" 

  container_definitions = <<DEFINITION
[
  {
    "name": "${var.app_name}",
    "image": "${data.aws_caller_identity.current.account_id}.dkr.ecr.eu-west-2.amazonaws.com/vault-api:${var.application_version}",
    "essential": true,
    "cpu": 256,
    "memory": 512,
    "networkMode": "awsvpc",
    "networkConfiguration": {
      "awsvpcConfiguration": {
          "subnets": [
              "${join(",", data.aws_subnet_ids.private.ids)}"
          ], 
          "securityGroups": [
              "${aws_security_group.ecs_tasks.id}"
          ], 
          "assignPublicIp": "DISABLED"
      }
    }, 
    "portMappings": [
      {
        "containerPort": 80,
        "protocol": "tcp"
      }
    ],
    "environment": [
      {
          "name": "ApplicationVersion",
          "value": "${var.application_version}"
      }
    ],
    "logConfiguration": { 
       "logDriver": "awslogs",
       "options": { 
          "awslogs-create-group": "true",
          "awslogs-group" : "ecs/fargate/ditto-vault",
          "awslogs-region": "eu-west-2",
          "awslogs-stream-prefix": "vault"
      }
    },
    "requiresCompatibilities": [
        "FARGATE"
    ]
  }
]
DEFINITION
}
```

### Wrap Up 

As you can see there is quite a bit of terraform to write, just to set up the infrastructure/resources to be able to run a task in ECS, be that Fargate or EC2. 

As I mentioned in the previous post, I have built a pipeline that utilises a couple of shell scripts in order to build/run the Vault API solution.  

This creates the Dockerfile and runs the terraform and deploys the code to Fargate.  But I will go through this more in a subsequent post. 

[Part Two](/blog/01-vault-work-begins.md)
