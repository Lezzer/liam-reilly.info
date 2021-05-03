locals {
  origin_domain_name           = "${var.bucket_name}.s3.${var.aws_region}.amazonaws.com"
  origin_domain_name_no_region = "${var.bucket_name}.s3.amazonaws.com"
  s3_website_endpoint          = "${var.bucket_name}.s3-website.amazonaws.com"
  origin_id                    = "S3-Website-${var.bucket_name}.s3-website.amazonaws.com"
}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "Cloudfront access identity for liam-reilly.info S3 bucket"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = local.origin_domain_name_no_region
    origin_id   = var.cloudfront_distribution_origin_id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }

  aliases = [
    var.dns_zone,
    "*.${var.dns_zone}"
  ]
  default_root_object = "index.html"

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.cert.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2019"
  }

  custom_error_response {
    error_code    = 404
    response_code = 200
    error_caching_min_ttl = 0
    response_page_path = "/"
  }

  enabled = true

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = var.cloudfront_distribution_origin_id
    compress         = true

    forwarded_values {
      query_string = true
      headers      = ["Origin", "Access-Control-Request-Headers", "Access-Control-Request-Method"]

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    Environment = terraform.workspace
    Owner       = var.app_owner
  }
}
