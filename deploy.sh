#!/bin/sh

# abort on errors
set -e

git checkout gh-pages

git rebase master
# build
npm run build

git add dist && git commit -m 'New Dist Subtree Commit'

git subtree push --prefix dist origin gh-pages

git checkout master