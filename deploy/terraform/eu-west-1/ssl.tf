resource "aws_acm_certificate" "cert" {
  domain_name       = var.dns_zone
  subject_alternative_names = ["*.${var.dns_zone}"]
  validation_method = "DNS"
  provider          = "aws.us-east-1"
}

resource "aws_route53_record" "cert_validation" {
  name    = aws_acm_certificate.cert.domain_validation_options[0].resource_record_name
  type    = aws_acm_certificate.cert.domain_validation_options[0].resource_record_type
  zone_id = aws_route53_zone.hosted_zone.zone_id
  records = [aws_acm_certificate.cert.domain_validation_options[0].resource_record_value]
  ttl     = 60
}

resource "aws_acm_certificate_validation" "cert" {
  certificate_arn         = aws_acm_certificate.cert.arn
  provider                = "aws.us-east-1"
  validation_record_fqdns = [aws_route53_record.cert_validation.fqdn]
}