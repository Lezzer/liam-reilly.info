data "aws_caller_identity" "current" {}

variable "app_version" {}

variable "aws_region" {
  default = "eu-west-2"
}

variable "app_name" {
  default = "liam-reilly.info"
}

variable "task_cpu" {
  default = "256"
}

variable "task_memory" {
  default = "512"
}

variable "task_container_port" {
  default = "80"
}

variable "load_balancer_path" {
  default = "/"
}

