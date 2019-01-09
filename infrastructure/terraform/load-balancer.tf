resource "aws_alb_target_group" "liam-reilly-info" {
  name        = "${var.app_name}"
  protocol    = "HTTP"
  port        = "${var.task_container_port}"
  vpc_id      = "${data.aws_vpc.vpc.id}"
  target_type = "ip"

  health_check {
    path                = "${var.load_balancer_path}"
    port                = "${var.task_container_port}"
    healthy_threshold   = 5
    unhealthy_threshold = 2
    timeout             = 5
    interval            = 30
    protocol            = "HTTP"
    matcher             = "200"
  }
}

resource "aws_lb_listener_rule" "liam-reilly-info" {
  listener_arn = "${data.aws_alb_listener.private.arn}"
  priority     = 11

  action {
    type             = "forward"
    target_group_arn = "${aws_alb_target_group.liam-reilly-info.arn}"
  }

  condition {
    field  = "path-pattern"
    values = ["/${var.app_name}*"]
  }
}