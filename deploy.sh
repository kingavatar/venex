#!/bin/sh

# abort on errors
set -e

# build
npm run build

git commit -m 'New Dist Subtree Commit'

git subtree push --prefix dist origin gh-pages
