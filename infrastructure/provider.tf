terraform {

  required_version = ">= 0.15"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.40.0"
    }
  }
  backend "s3" {
    region         = "TERRAFORM_VAR_REGION"
    bucket         = "TERRAFORM_STATE_BUCKET"
    key            = "TERRAFORM_STATE_KEY"
    dynamodb_table = "TERRAFORM_STATE_DYNAMODB"
    kms_key_id     = "TERRAFORM_STATE_KMS"
    encrypt        = true
  }
}

provider "aws" {
  region  = var.aws_region
  default_tags {
    tags = var.default_tags
  }
}

provider "aws" {
  alias   = "virginia"
  region  = "us-east-1"
  default_tags {
    tags = var.default_tags
  }
}