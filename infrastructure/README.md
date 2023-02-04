BZZar infrastructure

## Infrastructure overview

For hosting bzz.ethswarm.org infrastructure we are using [AWS cloud provider](https://aws.amazon.com/). More precisely we are using these services:

- [Cloud Front](https://aws.amazon.com/cloudfront/) (AWS' Content Delivery Network)
- [S3 bucket](https://aws.amazon.com/s3/) for storing static files and separate bucket for logging
- [Route53](https://aws.amazon.com/route53//) as DNS service
- [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/) for SSL teermination
- [AWS Identity and Access Management](https://aws.amazon.com/iam/) for managing privileges and secrets
- [AWS Lambda](https://aws.amazon.com/lambda/) for checking S3 bucket against malwares, viruses, rootkits, etc..
- [AWS Web Application Firewall](https://aws.amazon.com/waf/) as a Web Application Firewall



Here is simplified infrastructure diagram:

![Infrastructure diagram](https://i.imgur.com/t0ywNkj.png)

## Infrastructure details

### CloudFront


CloudFront is deployed in all location with enabled IPv4 and IPv6 as well. Default http version is `http2`. Ports are 80 and 443 and every user who sent request to HTTP will be redirected to HTTPS.  Allowed methods  on CloudFront are GET, HEAD and OPTIONS. Moreover only GET and HEAD are cached. While we are on caching, default ttl for cache is `1 hour` and max time for caching is `1 day`.

While minimum SSL protocol version on CloudFront is set to `TLSv1.2_2019` which supports TLS version 1.2 and these ciphers:

- ECDHE-RSA-AES128-GCM-SHA256
- ECDHE-RSA-AES128-SHA256
- ECDHE-RSA-AES256-GCM-SHA384
- ECDHE-RSA-AES256-SHA384

#### CloudFront restrictions

AWS CloudFront supports blocking requests by originating country. In our setup we blocked all request from USA.


### S3 buckets

For storing all files which are delivered and cached on CloudFront we have S3 bucket which is completely private and only DevOps team have write access on it bucket. Also there are IAM policy which allows CloudFront to get those files (ReadOnly permissions)

As it was mentioned above there is one separate (also completely private) S3 bucket for storing CloudFront's access logs.

### Route53

On Route53 we are hosting DNS zone ethswarm.org and for this project we only have on `CNAME` record which points to CloudFront, obviously record iz bzz.ethswarm.org

### AWS Certificate Manager 

This service is used for issuing SSL certificate for deployed bzzar application. 

### AWS Identity and Access Management

This service is used for defining permissions over all described resources

### AWS Lambda

This service is used for automation of checkng newly uploaded files against viruses, malwares, etc. For those purposes [this project is used to deploy](https://github.com/upsidetravel/bucket-antivirus-function)

### AWS Web Application Firewall

This service is used as an additional security layer in our infrastructure. For now, we enabled basic rules against top 10 OWASP vulnerabilities as well as rules which block anonymous access (VPN, Access from IPs with bad reputation, etc..)

## Deployment process

For setting up all infrastructure and deploying new versions of application we are using [terraform](https://www.terraform.io/) Infrastructure as a Code solution developed ba Hashicorp together with GitHub Actions. All relevant terraform code is stored in this directory (infrastructure/) and github actions configurations is stored in .github/workflows/deploy.yaml file.

### Environments

For this project we have 2 deployed environments:
* staging (https://demo-test.bzz.exchange)
* production (https://bzz.exchange)


### Deploying new version of staging env

If we want to deploy new version to the staging env we should push (or merge) into branch staging. On every commit here deployment will happen automatically by running github actions. All relevant secrets related to this is stored in project secret (with staging in name).

### Deploying new version of production env

If we want to deploy new version to the production env we should push (or merge) into branch master. On every commit here deployment will automatically start by triggering actions. All relevant secrets related to this is stored in project secret.

