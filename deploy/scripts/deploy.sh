#!/usr/bin/env bash

print $1
cd ../../dist

print "Deploy script called with $1"

#aws s3 sync s3://liam-reilly.info
#aws cloudfront create-invalidation --distribution-id E7HHZDNHPXBIG