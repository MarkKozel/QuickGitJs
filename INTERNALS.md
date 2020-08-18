# Private classes
## BranchListContainer
Used my Repo and Working containers to manage and process branch lists

Returns from system calls to git is kinda messy. This class exists to hide that messiness

|Function|Purpose|Notes|
|-|-|-|
|**constructor(rawList = '')**|takes the raw git return (string with embedded newlines and an * indicating master)|Saves rawList, for no useful reason I am aware of yet. Calls *cleanList()* to parse raw into cooked into|
|**updateList(rawList)**|*same as construtor*| |
|**cleanList()**|Translates raw Git output into array and determines the current branch. Updates *this.branchArray*| *toStrings* raw output and splits by *\n*. Traveres resulting array looking for prepended *, indicating current branch, and updates *this.currentBranchIndex*. Finally, removes pesky spaces in each branch...this required anotehr *toString* in each branch name (not sure why)|
|**getList()**|Returns *this.branchArray* without any update||
|**getCurrentBranch()**|Returns current branch using *this.currentBranchIndex* to index into *this.branchArray*||
|**branchExists(branchName)**|Tests known *this.branchArray* for existance of provided *branchName*||


 

