#!/usr/bin/env bash
npm run export

cp ./out/contact/index.html ./out/contact
cp ./out/resume/index.html ./out/resume

aws s3 sync ./out s3://liam-reilly.info
aws cloudfront create-invalidation --distribution-id EUS4UKP82XSQ5 --paths /*