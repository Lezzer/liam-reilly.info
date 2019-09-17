resource "aws_s3_bucket" "website_bucket" {
  bucket = var.dns_zone
  acl    = "public-read"

  tags = {
    Owner       = var.app_owner
    Environment = terraform.workspace
  }

  policy = data.aws_iam_policy_document.bucket_policy.json

  website {
    index_document = "index.html"
    error_document = "error.html"

    routing_rules = <<EOF
[{
    "Condition": {
        "KeyPrefixEquals": "resume/"
    },
    "Redirect": {
        "ReplaceKeyPrefixWith": "/"
    }
},
{
    "Condition": {
        "KeyPrefixEquals": "contact/"
    },
    "Redirect": {
        "ReplaceKeyPrefixWith": "/"
    }
}
]
EOF
  }
}

data "aws_iam_policy_document" "bucket_policy" {
  statement {
    sid    = "Allow-Web-Access"
    effect = "Allow"

    principals {
      type        = "AWS"
      identifiers = ["*"]
    }

    actions   = ["s3:GetObject"]
    resources = ["arn:aws:s3:::${var.dns_zone}/*"]
  }
}
