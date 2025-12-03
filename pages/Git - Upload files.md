- For most projects, before you want to upload files it is important to checkout a branch other then main
- For this project there are currently 2 branches, `psychology` and `programming`
- When you checked out a branch using this command `git checkout branchName` you can edit the files
- When you now want to upload these files use the following commands:
  
  ```shell
  git status # to see your changed files
  git add filename # Replace with actual files
  git commit -m "Commit message" # Replace with actual message
  git push origin branchName
  ```