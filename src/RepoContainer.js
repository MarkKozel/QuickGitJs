const fs = require("fs");
const path = require("path");
const { findTextInFile } = require("./utils/fileUtils");
const BranchListContainer = require("./BranchListContainer");
const StatusContainer = require("./StatusContainer");
const CommitContainer = require("./CommitContainer");
const { Logger } = require('./Logger');

/**
 * @constructor
 * @param {string} path - location of target repo
 * @param {boolean} readOnly - flag to allow or prevent updates to this repo
 */
class RepoContainer {
  constructor(path, readOnly = true) {
    this._path = path;
    this.setReadonly(readOnly);
    this._error = null; //null if ok, text message otherwise
    this._imA = null; //'working', 'remote', or null

    this.checkPath();
    this._error = this._imA ? null : `${this._path ? this._path : "null"} is not a valid repo`;

    this._branchList = new BranchListContainer();
    this._statusObj = new StatusContainer();
    this._commitObj = new CommitContainer(this._path);
    this._logs = new Logger();

    this._logs.log("created");
  }

  /**
   * Sets/resets readonly flag. if not boolean, sets readonly to false
   * @param {boolean} newState new state for readonly flag
   */
  setReadonly(newState) {
    if (typeof newState === 'boolean') {
      this._readOnly = newState
    } else {
      this._readOnly = false
    }
  }

  /**
   * Checks provided this._path. Determines if it is a Base Repo, Working, or unknown
   * Sets this._imA, this._error, and this._ready
   */
  checkPath() {
    this._imA = null;
    this._error = null;

    if (this._path) {
      // this._ready = true;
      if (fs.existsSync(path.join(this._path, ".git"))) {
        if (findTextInFile(path.join(this._path, ".git", "config"), "bare = false")) {
          this._imA = "working";
        } else {
          this._imA = null;
        }
      } else {
        // this._ready = true;
        if (findTextInFile(path.join(this._path, "config"), "bare = true")) {
          this._imA = "remote";
        } else {
          this._imA = null;
        }
      }
    } else {
      this._error = "no path supplied";
    }
  }

  isReady() {
    return { repoType: this._imA, error: this._error };
  }

  getLog() {
    return this._logs.getPrettyLogs()
  }
}

module.exports = RepoContainer;
