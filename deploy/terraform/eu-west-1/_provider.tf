provider "aws" {
  region = var.aws_region
}

provider "aws" {
  # us-east-1 instance for creating ssl cert in acm
  region = "us-east-1"
  alias  = "us-east-1"
}
