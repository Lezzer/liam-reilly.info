data "aws_ecs_cluster" "liams-cluster" {
  cluster_name = "liams-cluster"
}

resource "aws_ecs_service" "liam-reilly-info" {
  name                              = "${var.app_name}"
  cluster                           = "${data.aws_ecs_cluster.liams-cluster.id}"
  task_definition                   = "${aws_ecs_task_definition.liam-reilly-info-task.arn}"
  launch_type                       = "FARGATE"
  desired_count                     = 2
  health_check_grace_period_seconds = 30

  network_configuration {
    security_groups = [
      "${aws_security_group.ecs_task.id}"
    ]
    subnets         = ["${data.aws_subnet_ids.private.ids}"]
  }

  load_balancer {
    container_name   = "${var.app_name}"
    container_port   = "${var.task_container_port}"
    target_group_arn = "${aws_alb_target_group.liam-reilly-info.arn}"
  }
}
