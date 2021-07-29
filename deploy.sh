#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

git add dist -f

git subtree push --prefix dist origin gh-pages

cd /