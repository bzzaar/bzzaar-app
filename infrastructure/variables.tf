# AWS
variable "aws_region" {
  type        = string
  description = "AWS Profile"
}

# COMMON
variable "default_tags" {
  type = map(string)
  default = {
    Administrator = ""
    Environment   = ""
  }
  description = "A map of default tag blocks."
}

variable "domain_name" {
  type        = string
  description = "domain name"
}

variable "host_name" {
  type        = string
  description = "hostname without domain"
}

# S3

variable "s3_upload_files_path" {
  type        = string
  description = "Path to the folder with files for uploading to the s3 bucket"
}

variable "s3_index_document" {
  type        = string
  description = "File in bucket which should be index page"
}

variable "s3_error_document" {
  type        = string
  description = "File in bucket which should be error page"
}