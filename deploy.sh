#!/bin/bash

directory=dist

branch=gh-pages

build_command() {

  npm run build

}


echo -e "\033[0;32mDeleting old content...\033[0m"
rm -rf $directory

echo -e "\033[0;32mGenerating site...\033[0m"
build_command

echo -e "\033[0;32mChanging Directory...\033[0m"
mv $directory $directory\_new

echo -e "\033[0;32mChecking out $branch....\033[0m"
git worktree add $directory $branch

echo -e "\033[0;32mCopying Build Files and deleting Extra Directory...\033[0m"
cp -r $directory\_new/* $directory
rm -rf $directory\_new

echo -e "\033[0;32mDeploying $branch branch...\033[0m"
cd $directory &&
  git add --all &&
  git commit -m "Build output as of $(git log '--format=format:%H' master -1)" &&
  git push origin $branch


echo -e "\033[0;32mCleaning up...\033[0m"
git worktree remove $directory
