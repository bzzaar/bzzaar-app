module "s3-cf" {
  source               = "git::https://github.com/aleksandarknezevic/terraform-aws-cloudfront-s3.git?ref=bzzar"
  domain_name          = var.domain_name
  s3_upload_files_path = var.s3_upload_files_path
  providers = {
    aws          = aws,
    aws.virginia = aws.virginia
  }
  hostname = var.host_name
  s3_acl   = "private"
  cf_geo_restrictions = {
    "restriction_type" : "blacklist"
    "locations" : ["US"]
  }
}

