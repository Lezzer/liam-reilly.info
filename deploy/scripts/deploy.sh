#!/usr/bin/env bash

print $1
cd ../../dist
aws s3 sync s3://liam-reilly.info

aws cloudfront create-invalidation --distribution-id E7HHZDNHPXBIG