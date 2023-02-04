# AWS
aws_region  = "TERRAFORM_VAR_REGION"

# COMMON
default_tags = {
  Administrator = "TERRAFORM_VAR_TAGS_ADMINISTRATOR"
  Environment   = "TERRAFORM_VAR_TAGS_ENVIRONMENT"
  Project       = "TERRAFORM_VAR_TAGS_PROJECT"
}

domain_name = "TERRAFORM_VAR_DOMAIN_NAME"
host_name   = "TERRAFORM_VAR_HOST_NAME"

s3_upload_files_path = "../build/"
s3_index_document    = "index.html"
s3_error_document    = "index.html"