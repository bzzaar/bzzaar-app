locals {
  fqdn = var.host_name == "" ? var.domain_name : join(".", [var.host_name, var.domain_name])
}