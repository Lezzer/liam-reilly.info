#!/usr/bin/env bash
mkdir ./out
npm run export

# Fix for NextJS not doing relative paths!
sed 's+/_next/+./_next/+g' ./out/index.html > ./out/index2.html
mv ./out/index2.html ./out/index.html

sed 's+/_next/+./_next/+g' ./out/resume.html > ./out/resume2.html
mv ./out/resume2.html ./out/resume.html

sed 's+/_next/+./_next/+g' ./out/contact.html > ./out/contact2.html
mv ./out/contact2.html ./out/contact.html

aws s3 sync ./out s3://liam-reilly.info
aws cloudfront create-invalidation --distribution-id EUS4UKP82XSQ5 --paths /*