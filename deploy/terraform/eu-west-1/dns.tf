
resource "aws_route53_record" "website_record" {
  zone_id = data.aws_route53_zone.website_hosted_zone.zone_id
  name    = var.dns_zone
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_website_record" {
  zone_id = data.aws_route53_zone.website_hosted_zone.zone_id
  name    = "www.${var.dns_zone}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "naked_redirect_record" {
  zone_id = data.aws_route53_zone.website_hosted_zone.zone_id
  name    = "@"
  type    = "A"
  ttl     = 300

  records = [
    "216.239.32.21",
    "216.239.34.21",
    "216.239.36.21",
    "216.239.38.21",
  ]
}

resource "aws_route53_record" "email_record" {
  zone_id = data.aws_route53_zone.website_hosted_zone.zone_id
  name    = var.dns_zone
  type    = "MX"
  ttl     = 300
  records = [
    "10 ASPMX.L.GOOGLE.COM.",
    "20 ALT1.ASPMX.L.GOOGLE.COM.",
    "20 ALT2.ASPMX.L.GOOGLE.COM.",
    "30 ASPMX2.GOOGLEMAIL.COM.",
    "40 ASPMX3.GOOGLEMAIL.COM.",
  ]
}