const { execSync } = require('child_process');

/**
 * Used by Repo and Working containers to manage and process branch lists
 * Returns from system calls to git is kinda messy. This class exists to hide that messiness
 */
class BranchListContainer {
  constructor(rawList = '') {
    this.rawList = rawList;
    this.branchArray = [];
    this.currentBranchIndex = -1

    if (rawList) {
      this.rawList = rawList;
      this.cleanList()
    }
  }

  /**
   * Modifies branch list
   * @param {string} rawList raw output from Git
   */
  updateList(rawList) {
    if (rawList) {
      this.rawList = rawList;
      this.cleanList()
    }
  }

  /**
   * Translates raw Git output into array and determines the current branch
   */
  cleanList() {
    this.branchArray = this.rawList.toString().split('\n')

    this.branchArray = this.branchArray.filter(e => e.trim() !== ''); //rm empty entries

    //Find current Branch
    this.currentBranchIndex = -1;
    for (let i = 0; i < this.branchArray.length; i++) {
      let curBranch = this.branchArray[i].toString();
      if (curBranch[0] === '*') { //Find current Branch
        this.currentBranchIndex = i;
        curBranch = curBranch.substring(1);
      }
      //clean up each entry
      curBranch = curBranch.toString().trim();
      this.branchArray[i] = curBranch;
    }
  }

  /**
   * gets updated branch list, and updates rawList and branchArray
   * @param {*} path - location of repo
   * @returns raw branch list
   */
  retrieveBranchList(path) {
    let cmd = `git --git-dir=${path}/.git branch`;
    const branchList = execSync(cmd);
    this.updateList(branchList);
    return branchList;
  }

  /**
   * Checks out branchName. If branch exists, it is checked out. If is does not exist, it is created and checked out
   * @param {*} path - location of repo
   * @param {*} branchName - name of branch to checkout
   * @returns "already there" of branchName was already checked out, "ok" otherwise
   */
  switchBranch(path, branchName) {
    let cmd = '';
    this.retrieveBranchList(path);
    if (this.getCurrentBranch() === branchName) {
      return 'already there';
    }
    let exists = this._branchExists(branchName);

    if (exists) {
      cmd = `git --git-dir=${path}/.git checkout ${branchName}`;
    } else {
      cmd = `git --git-dir=${path}/.git checkout -b ${branchName}`;
    }

    const branch = execSync(cmd);
    return 'ok';
  }
  /**
   * returns list w/o update
   */
  getList() {
    return this.branchArray;
  }

  /**
   * returns name of master branch
   * @returns {string} main branch name
   */
  getCurrentBranch() {
    return this.branchArray[this.currentBranchIndex];
  }

  /**
   * Return true if branchName exists, false otherwise
   * @param {string} branchName - branch name to search
   */
  branchExists(branchName) {
    return (this.branchArray.indexOf(branchName) > -1)
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = BranchListContainer;
}