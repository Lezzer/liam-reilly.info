resource "aws_iam_user" "vault-user" {
  name = "${var.app_name}-user"
}

resource "aws_iam_role" "vault-role" {
  name = "${var.app_name}-role"

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

resource "aws_iam_role_policy" "ecr" {
  name = "${var.app_name}-ecr"
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
  name = "${var.app_name}-vpc"
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
          "arn:aws:ec2:${var.aws_region}:${data.aws_caller_identity.current.account_id}:vpc/*"
      ]
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "lb-access" {
  name = "${var.app_name}-lb"
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
  name = "${var.app_name}-cloudwatch"
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
            "arn:aws:logs:${var.aws_region}:${data.aws_caller_identity.current.account_id}:*"
      ]
    }	
  ]	
}
EOF
}