npm run export

sed 's+/_next/+./_next/+g' ./out/index.html > ./out/index2.html
mv ./out/index2.html ./out/index.html

sed 's+/_next/+./_next/+g' ./out/resume.html > ./out/resume2.html
mv ./out/resume2.html ./out/resume.html

sed 's+/_next/+./_next/+g' ./out/contact.html > ./out/contact2.html
mv ./out/contact2.html ./out/contact.html
