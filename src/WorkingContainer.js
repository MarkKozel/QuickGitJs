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
  getBranchList() {
    let cmd = `git --git-dir ${this._path}/.git branch`;
    const branch = execSync(cmd);
    this._branchList.updateList(branch);
    // let branchArray = branch.toString().split('\n')
    // branchArray = branchArray.filter(e => e.trim() !== ''); //rm empty entries
    // branchArray.map(str => str.trim()); //clean up entries
    return this._branchList.getList();
  }

  // cleanupList(list){
  //   // list = list.filter(e => e.trim() !== '');
  //   for(let el in list){
  //     list[parseInt(el)].trim();
  //   }
  // }
  /**
   * Returns current branch
   * @returns { string } name of current branch
   */
  getCurrentBranch() {
    this.getBranchList();
    return this._branchList.getCurrentBranch();
  }

  /**
   * Checks out branchName. If branch exists, it is checked out. If is does not exist, it is created and checked out
   * If repo was opened read-only, returns error
   * @param {string} branchName 
   * @returns {json} result - contains status and message
   */
  checkoutBranch(branchName) {
    let result = {
      status: "",
      statusCode: -1,
      msg:""
    };

    if (!this._readOnly) {
      let cmd = '';
      let branchList = this.getBranchList();
      if(this._branchList.getCurrentBranch() === branchName){
        result.status="OK",
        result.statusCode = 0;
        result.msg = `Already on '${branchName}'`;
        return result;
      }
      let exists = this._branchList.branchExists(branchName);

      if (exists) {
        cmd = `git --git-dir ${this._path}/.git checkout ${branchName}`;
      } else {
        cmd = `git --git-dir ${this._path}/.git checkout -b ${branchName}`;
      }

      const branch = execSync(cmd);
      let val= branch.toString();
      result.status="OK",
      result.statusCode = 0;
      result.msg = `Switched to branch '${branchName}'`;
        return result;
    } else {
      result.status="ERROR",
      result.statusCode = -1;
      result.msg = `${this._path} was opened read-only`;
    }
    return result;
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = WorkingContainer;
}