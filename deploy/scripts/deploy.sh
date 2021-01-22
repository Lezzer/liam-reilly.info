#!/usr/bin/env bash
npm run build

cp ./dist/index.html ./dist/resume.html
cp ./dist/index.html ./dist/contact.html
cp ./dist/index.html ./dist/error.html

aws s3 sync ./dist s3://liam-reilly.info
aws cloudfront create-invalidation --distribution-id EUS4UKP82XSQ5 --paths /*