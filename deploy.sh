#!/usr/bin/env bash

rev=$(git rev-parse --short HEAD)

cd public

rm .gitignore

git init
git config user.name "Travis CI Auto Build"
git config user.email "tony@opensource.hk"

git remote add origin "https://$GITHUB_TOKEN@github.com/$TRAVIS_REPO_SLUG.git"
git fetch && git reset origin/gh-pages

touch .

git add -A .
git commit -m "Build of ${rev}"
git push -u origin gh-pages