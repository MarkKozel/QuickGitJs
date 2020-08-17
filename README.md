# Quick Git JS
*super beta verison. Did not mean to publish version 1.x.x. Consider it version 0.0.1*

## Simple JavaScript node package for interacting with local working git repositories



Expects you have [git](https://git-scm.com/downloads) for your system installed and configured to run at the command-line

Verify by opening a command-line terminal and typing ```git --version```. If you see a version number returned, you are good to go


## Classes

>see API.md and JSDocs folder for details

### RepoContainer
Container for generic repository. Can be Working Directory


### WorkingContainer
Container for working folder and local repository

>Inherits from RepoContainer


### Version History
1.0.x - Implement classes to read working repos for current branch