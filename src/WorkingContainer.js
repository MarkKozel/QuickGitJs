const RepoContainer = require('./RepoContainer');
const { git } = require("./utils/gitUtils");
const config = require('../quickgitConfig');

const fs = require("fs");
const path = require("path");

/**
 * @constructor
 * @param {string} path - location of target repo
 * @param {boolean} readOnly - flag to allow or prevent updates to this repo
 */
class WorkingContainer extends RepoContainer {

  constructor(repoPath, readOnly = true) {
    super(repoPath, readOnly);

    if (this._imA !== 'working') {
      this._error = 'not a valid working repo'
      if (this._imA === 'remote') {
        this._error += '. Looks like a remote repo'
      }
    } else {
      this._repoName = path.basename(repoPath);
    }

    this._git = new git();

    if (config.working && config.working.length > 0) {
      config.working.forEach(el => {
        this[el.name] = function () {
          return this._git.execute(el.cmd);
        }
      });
    }
  }

  /**
   * Returns object for caller to evaluate
   * @returns { object } imA and error flags
   */
  isReady() {
    let base = super.isReady();
    this._logs.log(`reported isReady with result ${base.repoType} and ${base.error}`);
    return base;
  }

  getRepoName() {
    return this._repoName;
  }

  /**
   * Returns current branch
   * @returns { string } name of current branch
   */
  getCurrentBranch() {
    this._branchList.retrieveBranchList(this._path);
    return this._branchList.getCurrentBranch();
  }

  /**
   * Checks out branchName. If repo was opened read-only, returns error
   * @param {string} branchName 
   * @returns {json} result - contains status and message
   */
  checkoutBranch(branchName) {
    let result = {
      status: "",
      statusCode: -1,
      msg: ""
    };

    if (!this._readOnly) {
      let switchResult = this._branchList.switchBranch(this._path, branchName)

      if (switchResult === 'already there') {
        result.status = "OK";
        result.statusCode = 0;
        result.msg = `Already on '${branchName}'`;
        return result;
      } else {
        result.status = "OK";
        result.statusCode = 0;
        result.msg = `Switched to branch '${branchName}'`;
        return result;
      }

    } else {
      result.status = "ERROR";
      result.statusCode = -1;
      result.msg = `${this._path} was opened read-only`;
    }
    this._logs.log(`Checked out ${branchName} with result ${result.msg}`);
    return result;
  }

  /**
   * Returns pretty print version of short status
   * @returns {string} formatted short status
   */
  getStatus() {
    this._statusObj.getShortStatus(this._path);
    this._logs.log(`Requested status`);
    return this._statusObj.shortStatusToString()
  }

  getSimpleCommit() {
    this._logs.log(`Requested simple commit history`);
    return this._commitObj.getLastCommit(true, false);
  }
  getSimpleCommitJson() {
    this._logs.log(`Requested simple json commit history`);
    return this._commitObj.getLastCommit(true, true);
  }
}

module.exports = WorkingContainer;
