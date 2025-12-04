- Given you have 2 branches now, one is called `dev-changes` the other one `main`
- main is the main branch here, all code will sooner or later be merged into main
  That means it will be integrated into your main code
- If you checked out a branch `git checkout -b dev-changes`, made your changes and now want to merge it into your main branch you need to do this either...
	- In Github (recommended way)
		- The way to go is to create a merge request first (unfold to see screenshot)
		- After that you can wait for pipelines to finish (What is a #[[Git - Pipeline]]? )
		- ...
	- In Code (not recommended)
		- ```shell
		  git checkout main
		  git merge dev-changes # inegrate dev-changes into main
		  git push origin main # Upload the modified files
		  ```