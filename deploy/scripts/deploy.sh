#!/usr/bin/env bash
npm run export

aws s3 sync ./out s3://liam-reilly.info
aws cloudfront create-invalidation --distribution-id EUS4UKP82XSQ5 --paths /*