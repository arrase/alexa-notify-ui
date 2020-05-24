#!/bin/bash

# abort on errors
set -e

git checkout master
git merge develop
git push

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:arrase/alexa-notify-ui.git master:gh-pages

cd -
git checkout develop
