# Quick Git JS

Simple JavaScript node package for interacting with local working git repositories. Class-based modules that use node *child_process* to make [sync systems calls](https://nodejs.org/api/child_process.html#child_process_synchronous_process_creation) to git
<br>

## Requires:
- Node 12.x, maybe earlier
- Git 2.x [git-scm downloads](https://git-scm.com/downloads) 

## Usage:

### Require:
```javascipt
const { WorkingContainer } = require('quickgitjs')
const { RemoteContainer } = require('quickgitjs')
```
### Instate object:
```javascipt
let repo = new WorkingContainer(path, readOnly);
let repo = new RemoteContainer(path, readOnly);
```

**arguments:**
- dir - {string} path to working directory (contains working files and *.git* folder)
- readOnly - {boolean} prevent/allow update operations, like commit, tag, checkout

### Other Functions:
```javascipt
if (repo.isReady()) {
  console.log("Get Current Branch:\n" + repo.getCurrentBranch());
  console.log("Checkout:\n" + repo.checkoutBranch('br1'));
  console.log("Status:\n" + repo.getStatus())
  console.log("Log:\n" + repo.getLog())
  console.log("Log:\n" + repo.getRepoName())
}
```
Output:

```javascript
Get Current Branch:
master

Checkout:
{
  status: 'ERROR',
  statusCode: -1,
  msg: 'path/to/repo was opened read-only'
}

Status:
D       1.txt
??      .gitignore
??      helloworld.js

Log:
created
repotered isReady with result working and null
Checked out br1 with result path/to/repo was opened read-only

myRepoName
```
## What's New
```quickgitConfig.js``` allows user to create custom git commands for *working* and *remote* objects. Commands are added to the *WorkingContainer* and *RemoteContainer* classes, and present in all instances.

### Example

**quickgitConfig.js**
``` js 
module.exports = {
  working: [
    { name: 'myStatus', cmd: 'git status' }
  ],

  remote: [
  ]
}
```
**User Code**
``` js
const { WorkingContainer } = require('quickgitjs')

let repo = new WorkingContainer(path, readOnly);
let result = repo.myStatus();
console.log(result);
```

**Console Output**
```bash
On branch master
    Your branch is up to date with 'origin/master'.·
    Changes not staged for commit:
      (use \"git add <file>...\" to update what will be committed)
      (use \"git restore <file>...\" to discard changes in working directory)
        modified:   src/RemoteContainer.js
        modified:   src/WorkingContainer.js
        modified:   tests/RemoteContainer.test.js
        modified:   tests/WorkingContainer.test.js·
    Untracked files:
      (use \"git add <file>...\" to include in what will be committed)
        quickgitConfig.js·
    no changes added to commit (use \"git add\" and/or \"git commit -a\")
```



## License:
[CC-BY-NC-SA-4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
Attribution-NonCommercial-ShareAlike 4.0 International

## Miscellany

### Near Future to-dos
- Add tagging
- Add Fetch and Pull

### Version History
2.0.0-alpha01 - Started a RemoteContainer class. converted exports to module.exports for cleaner importing. Added ```quickgitConfig.js``` to define custom commands.

1.1.4 - Removed Documentation dev dependency due to security issues

1.1.3 - Added getRepoName() in WorkingContainer class

1.1.2 - Cleanup, gitUtils singleton, and switch to Documentation pkg and dumped JSDoc

1.1.0 - initial *release* with basic Working Folder/Local Repo functionality (get branch info, short status, checkout branch)

<a href="https://www.buymeacoffee.com/MarkKozel" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

### Historical Context
World in knee-deep in a global pandemic, protests and riots opposing entrenched governments (including the US), Webster's Dictionary is expected to retire the words *unprecedented times* (not really, but I wish), The US sits at the brink of massive change or realizing orwell's vision, and I sit coughing in my office as California burns...yet again