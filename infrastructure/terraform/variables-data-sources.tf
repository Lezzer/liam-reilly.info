data "aws_vpc" "vpc" {
  tags {
    Name = "vpc.private.${var.aws_region}"
  }
}

data "aws_alb" "alb" {
  name = "alb.private"
}

data "aws_alb_listener" "private" {
  load_balancer_arn = "${data.aws_alb.alb.arn}"
  port              = 443
}

data "aws_subnet_ids" "private" {
  vpc_id = "${data.aws_vpc.vpc.id}"

  tags {
    Tier = "private"
  }
}