data "aws_caller_identity" "current" {}

data "aws_route53_zone" "website_hosted_zone"  {
  name         = var.dns_zone
  private_zone = false
}