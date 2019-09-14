#!/usr/bin/env bash

npm run build
cd ../../dist
aws s3 sync . s3://liam-reilly.info
#aws cloudfront create-invalidation --distribution-id E217GY0T80SPQ5