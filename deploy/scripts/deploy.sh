#!/usr/bin/env bash
npm run export

cp ./out/index.html ./dist/resume.html
cp ./out/index.html ./dist/contact.html

mv ./dist/resume.html ./dist/resume
mv ./dist/contact.html ./dist/contact

aws s3 sync ./out s3://liam-reilly.info
aws cloudfront create-invalidation --distribution-id EUS4UKP82XSQ5 --paths /*