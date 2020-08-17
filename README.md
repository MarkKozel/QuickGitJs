# Quick Git JS
*super beta verison. Did not mean to publish version 1.x.x. Consider it version 0.0.1*

## Simple JavaScript node package for interacting with local working git repositories



Expects you have [git](https://git-scm.com/downloads) for your system installed and configured to run at the command-line

Verify by opening a command-line terminal and typing ```git --version```. If you see a version number returned, you are good to go


## Classes

*see JSDocs folder for API*

### RepoContainer
Container for generic repository. Can be Working Directory or Remote Repo

**RepoContainer(path, readOnly)**
>*path* to the existing repo

>(optional) *readOnly* boolean indicating if modifcations (commit, push, tag, branch) operations should be allowed, *Default is ```true```*

``` javascript
const quickGit = require('quickgitjs')
let repo = new quickGit.RepoContainer("./myMissingRepo.git", true);
console.log(repo.isReady())

const RepoContainer = require('quickgitjs').RepoContainer
let repo1 = new RepoContainer("./otherRepo.git", true);
console.log(repo1.isReady())
```

Expected results (*myMissingRepo.git* is missing and *otherRepo.git* is a real repo)
```
{ ready: false, error: './myMissingRepo.git is not a repo' }
{ ready: true, error: '' }
```

### WorkingContainer
Container for working folder and local repository

Inherits from RepoContainer

**WorkingContainer(path, readOnly)**
>*path* to the existing repo

>(optional) *readOnly* boolean indicating if modifcations (commit, push, tag, branch) operations should be allowed, *Default is ```true```*

### Version History
1.0.x - Implement classes to read working repos for current branch