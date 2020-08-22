# Utilities
## fileUtils
Functions and data to simplify some general and mundane activities

**Functions:**
|Function|Purpose|Notes|
|-|-|-|
|findTextInFile(file, txt)|Searches for *txt* in *file*|Returns *true* if an instance of *txt* is found, false otherwise|
|getProjRoot|Gets full path to project. Uses location of *fileUtils.js* as starting reference |This is primarily for development|
||||

### Usage Examples:
```javascript
const findTextInFile = require("./utils/fileUtils").findTextInFile;

if (findTextInFile('path/to/file', 'bare = false')) {
  this._imA = 'working';
} else {
  this._imA = null;
}
```

```javascript
const getProjRoot = require("./utils/fileUtils").getProjRoot;
let testDir = path.join(fileUtils.getProjRoot(), "tests");
```

## gitUtils
Singleton class that executes systems call(s) to git

**Member Variable:**
- _instance - reference to *this* for singleton behavior
- lastCmd - Holds last command
- lastResult - Holds result of last command
- lastError - Holds last error message

**Member Functions:**
|Function|Purpose|Notes|
|-|-|-|
|**constructor()**|Constructor. Inits object -or- returns existing object|A little *singleton* trickery in here. First *new* call will init member variables and *_instance* variable. Subsequent new calls will get *this* returned|
|**execute(cmd, path = '')**|Makes system call to *git* with *cmd* and optional *path* parameters|Updates all the *last* member variables|
||||


### Usage:
```javascript
const git = require("./utils/gitUtils");
```
**Instanciate object for use**
```javascript
this._git = new git();
```
*this is a singleton class, so member functions and variables are effectively status*

**Execute a git call**
```javascript
let cmd = `git --git-dir=${path}/.git checkout ${branchName}`;
const result = this._git.execute(cmd, path);
```
**Access *last* member variables:**
```javascript
console.log(`Last Command: ${this._git.lastCmd}`);
console.log(`Last Result: ${this._git.lastResult}`);
console.log(`Last Error: ${this._git.lastError}`);
```