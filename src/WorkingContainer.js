const { execSync } = require('child_process');

const RepoContainer = require('./RepoContainer');

const fs = require("fs");
const path = require("path");

/**
 * @constructor
 * @param {string} path - location of targer repo
 * @param {boolean} readOnly - flag to allow or prevent updates to this repo
 */
class WorkingContainer extends RepoContainer {

  constructor(path, readOnly = true) {
    super(path, readOnly);

    if (this._imA !== 'working') {
      this._error = 'not a valid working repo'
      if (this._imA === 'remote') {
        this._error += '. Looks like a remote repo'
      }
    }
  }

  /**
   * Returns object for caller to evaluate
   * @returns { object } imA and error flags
   */
  isReady() {
    let base = super.isReady();
    return base;
  }

  /**
   * Returns array of branches
   * @returns { array } branches in working directory
   */
  getBranchList(){
    let cmd = `git --git-dir ${this._path}/.git branch`;
    const branch = execSync(cmd);
    // let branches = branch.toString();
    let branchArray = branch.toString().split('\n')
    return branchArray;
  }

  /**
   * Returns current branch
   * @returns { string } name of current branch
   */
  getCurrentBranch() {
    let branches = this.getBranchList();
    let currentBranch = '';
    for(const branch of branches){
      if (branch[0] === '*') {
        currentBranch = branch.slice(1).trim();
      }
    }
    return currentBranch;
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = WorkingContainer;
}