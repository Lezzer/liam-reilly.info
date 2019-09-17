#!/usr/bin/env bash

npm run build

cp ./dist/index.html ./dist/resume.html
cp ./dist/index.html ./dist/contact.html

mv ./dist resume.html ./dist/resume
mv ./dist contact.html ./dist/contact

aws s3 sync ./dist s3://liam-reilly.info
aws cloudfront create-invalidation --distribution-id E217GY0T80SPQ5 --paths /*