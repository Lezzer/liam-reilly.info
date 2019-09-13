#!/usr/bin/env bash

KEY="aws_access_key=$AWS_ACCESS_KEY_ID"
SECRET="aws_secret_key=${AWS_SECRET_KEY}"

cd ../terraform/eu-west-1
terraform plan -input=false -out=terraform.plan -var ${KEY} -var ${SECRET}