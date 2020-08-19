# Private classes
## BranchListContainer
Used by Repo and Working containers to manage and process branch lists

Returns from system calls to git is kinda messy. This class exists to hide that messiness

|Function|Purpose|Notes|
|-|-|-|
|**constructor(rawList = '')**|takes the raw git return (string with embedded newlines and an * indicating master)|Saves rawList, for no useful reason I am aware of yet. Calls *cleanList()* to parse raw into cooked info|
|**updateList(rawList)**|*same as construtor*| |
|**cleanList()**|Translates raw Git output into array and determines the current branch. Updates *this.branchArray*| *toStrings* raw output and splits by *\n*. Traveres resulting array looking for prepended *, indicating current branch, and updates *this.currentBranchIndex*. Finally, removes pesky spaces in each branch...this required anotehr *toString* in each branch name (not sure why)|
|**getList()**|Returns *this.branchArray* without any update||
|**retrieveBranchList(path)**|gets updated branch list, and updates rawList and branchArray|
|**switchBranch(path, branchName)**|Checks out branchName. If branch exists, it is checked out. If is does not exist, it is created and checked out||
|**getCurrentBranch()**|Returns current branch using *this.currentBranchIndex* to index into *this.branchArray*||
|**branchExists(branchName)**|Tests known *this.branchArray* for existance of provided *branchName*||


 ## StatusContainer
Used my Repo and Working containers to manage and process repo status info

Returns from system calls to git is kinda messy. This class exists to hide that messiness

|Function|Purpose|Notes|
|-|-|-|
|**constructor(rawStatus = '', short = true)**|Construtor. Takes optional rawStatus, to build up status from existing data. Takes **short** flag, indicating always short status|Saves rawStatus, for no useful reason I am aware of yet. Calls *cleanStatus()* to parse raw into cooked info|
|**cleanStatus()**|Translates raw Git output into string and determines the current status||
|**retrieveStatus(path, short = true)**|Gets current status|Performs the actual git system calls|
|**getShortStatus(path)**|Public method to request short status. Updfates status from repo||
|**shortStatusToString()**|Pretty print of current short status|Pretty print of current short status|

