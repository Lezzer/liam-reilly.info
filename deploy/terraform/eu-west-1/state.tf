terraform {
  backend "s3" {
    bucket = "liam-reilly-info-terraform-state-files"
    key    = "liam-reilly-info.tfstate"
    region = "eu-west-1"
  }
}
