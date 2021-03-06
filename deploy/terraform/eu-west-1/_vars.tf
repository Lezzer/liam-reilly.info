variable "aws_access_key" {}
variable "aws_secret_key" {}

variable "aws_region" {
  description = "The AWS region to host resources in"
  default     = "eu-west-1"
}

variable "app_owner" {
  description = "Name of the owner of this app"
  default     = "liam-reilly.info"
}

variable "bucket_name" {
  description = "Name S3 bucket for the website files to live in"
  default     = "liam-reilly.info"
  type        = string
}

variable "dns_zone" {
  description = "Name of dns zone to create alias in"
  default     = "liam-reilly.info"
  type        = string
}

variable "cloudfront_distribution_origin_id" {
  description = "Name of the cloudfront distribution"
  default     = "https://www.liam-reilly.info"
}