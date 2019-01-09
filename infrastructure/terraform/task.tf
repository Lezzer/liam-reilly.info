data "aws_iam_role" "ecs-task-execution-role" {
  name = "ecsTaskExecutionRole"
}

data "aws_iam_role" "ecs-service-role" {
  name = "ecsServiceRole"
}

resource "aws_ecs_task_definition" "liam-reilly-info-task" {
  family                   = "${var.app_name}"
  network_mode             = "awsvpc"
  cpu                      = "${var.task_cpu}"
  memory                   = "${var.task_memory}"
  requires_compatibilities = ["FARGATE"]
  execution_role_arn       = "${aws_iam_role.vault-role.arn}" 
  task_role_arn            = "${data.aws_iam_role.ecs-task-execution-role.arn}"

  container_definitions = <<DEFINITION
[
  {
    "name": "${var.app_name}",
    "image": "${data.aws_caller_identity.current.account_id}.dkr.ecr.eu-west-2.amazonaws.com/${var.app_name}:${var.app_version}",
    "essential": true,
    "cpu": ${var.task_cpu},
    "memory": ${var.task_memory},
    "networkMode": "awsvpc",
    "networkConfiguration": {
      "awsvpcConfiguration": {
          "subnets": [
              "${join(",", data.aws_subnet_ids.private.ids)}"
          ], 
          "securityGroups": [
              "${aws_security_group.ecs_task.id}"
          ], 
          "assignPublicIp": "DISABLED"
      }
    }, 
    "portMappings": [
      {
        "containerPort": ${var.task_container_port},
        "protocol": "tcp"
      }
    ],
    "environment": [
      {
          "name": "ApplicationVersion",
          "value": "${var.app_version}"
      }
    ],
    "logConfiguration": { 
       "logDriver": "awslogs",
       "options": { 
          "awslogs-create-group": "true",
          "awslogs-group" : "ecs/fargate/liam.reilly-info",
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
