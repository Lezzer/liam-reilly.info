data "aws_security_group" "internal-lb-security-group" {
  name = "alb.private"
}

resource "aws_security_group" "ecs_task" {
  name        = "liam-reilly-info-ecs-task"
  description = "allow inbound access from the ALB only"
  vpc_id      = "${data.aws_vpc.vpc.id}"

  ingress {
    protocol        = "tcp"
    from_port       = "${var.task_container_port}"
    to_port         = "${var.task_container_port}"
    security_groups = ["${data.aws_security_group.internal-lb-security-group.id}"]
  }

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }
}
