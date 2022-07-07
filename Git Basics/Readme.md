## On git, there is a cheat sheet.
### The Basics of Git :-
- Git is a modern and widely used distributed version control system in the world.
- It is developed to manage projects with high speed and efficiency.
- The version control system allows us to monitor and work together with our team members at the same workspace.
- Git was created by Linus Torvalds in 2005.

### Some basic Git commands are:
```
git init
git remote -v
git remote add origin <url>
git pull origin <branch name>
git status
git add <file name> or git add .
git status
git commit -m "initial comment"
git status
git push origin <branch name>

```

The git init command creates a new Git repository

```
$ git init
```

This command shows URLs of remote repositories when listing your current remote connections.

```
$ git remote -v
```

This command Create a new, empty Git repository on your remote server. Obtain the git remote add URL for the remote repository and add credentials if needed. 

```
$ git remote add origin <url>
```

The git pull origin branchname generally tells the git to pull / fetch (projects and data) from the remote repo named origin to our branchname

```
$ git pull origin <branch name>
```

git add 'file name' takes snapshot of the project(entire working directory) and stage it

```
$ git add <file name>
```

 git commit saves the staged snapshot to the repository.

```
$ git commit -m "initial comment"
```

The git push command is used to upload local repository content to a remote repository.

```
$ git push origin <branch name>
```


