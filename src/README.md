# Src Files
## WorkingContainer class
Purpose: contain a local working folder with local repo

### Create
Creates a working container object
**params:**

* path - *full path to working folder*
* readOnly - ***true**(default
) to prevent any updates (like commit, branch, tag) -or- **false** to allow updates*
```javascript
const quickGit = require('quickgitjs');
let repo = new quickGit.WorkingContainer("path/to/repo", true);
```
-or-
```javascript
const WorkingContainer = require('quickgitjs').WorkingContainer
let repo = new WorkingContainer("path/to/repo", true);
```

### isReady()
Tests that repo successfully opened -and- is a working folder/local repo

```javascript
console.log(repo.isReady());
```
  >upon success, will return object
  ```json
  { repoType: 'working', error: null }
  ```

>-or upon failing to opening a repo -or- not a working repo
```json
{ repoType: null, error: 'not a valid working repo' }
```


### Get Current Branch
Returns a string containing the current branch name -or- null
```javascript
console.log(repo.getCurrentBranch());
```

### Get Branch List
Returns an Array of all branches in local repo. current branch will be pretended with "*"
```javascript
console.log(repo.getBranchList());
```
>Example results
```javascript
[ '  br1', '* master', '' ]
```