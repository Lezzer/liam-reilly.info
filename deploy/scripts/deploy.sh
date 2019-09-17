#!/usr/bin/env bash

npm run build

cp ./dist/index.html ./dist/resume
cp ./dist/index.html ./dist/contact

aws s3 sync ./dist s3://liam-reilly.info
aws cloudfront create-invalidation --distribution-id E217GY0T80SPQ5 --paths /*