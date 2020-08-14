# Quick Git JS
Simple JavaScript node package for interacting with local-remote git repositories

*Local-Remote* git repositories are Remote Repos, but stored on the local network, not on Git services like GitHub or GitLab

## Classes

*see JSDocs folder for API*

### RepoContainer
Container for generic repository. Can be Working Directory or Local-Remote

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