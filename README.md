# Quick Git JS
*super beta verison. Did not mean to publish version 1.x.x. Consider it version 0.0.1*

Simple JavaScript node package for interacting with local working git repositories

<br>

Expects you have [git](https://git-scm.com/downloads) for your system installed and configured to run at the command-line

Verify by opening a command-line terminal and typing ```git --version```. If you see a version number returned, you are good to go

<br>

## Classes

>see API md file and JSDocs folder for details

>Also see INTERNALS md file for behind-the-scenes classes that support public classes

<br>

### RepoContainer
Base class container for generic repository. Contains member variables and functions associated with all git repos

Can be instanciated, but not much fun

<br>

### WorkingContainer
Container for working folder and local repository. Extends RepoContainer with functions and data to intereact with a local repo

>Inherits from RepoContainer

Typical Usage:
```javascipt
const WorkingContainer = require('quickgitjs').WorkingContainer
let repo = new WorkingContainer("path/to/repo", true);

if (repo.isReady()) {
  console.log(repo.getCurrentBranch());
  console.log(repo.checkoutBranch('br1'));
  console.log(repo.getStatus())
  console.log(repo.getLog())
}
```
OUTPUT:

```
master
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'master' branch was current

```javajsonscript
{
  status: 'ERROR',
  statusCode: -1,
  msg: 'path/to/repo was opened read-only'
}
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERROR becuase repo was opened 'readonly'
```
D       1.txt
??      .gitignore
??      helloworld.js
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Short status with 1 deleted file and 2 untracked files
```
created
repotered isReady with result working and null
Checked out br1 with result path/to/repo was opened read-only
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Log of action taken on this repo

<br>

### Version History
1.0.x - Implement classes to read working repos for current branch