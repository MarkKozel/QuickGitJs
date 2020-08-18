const fs = require("fs");
const path = require("path");
const fileUtils = require("./utils/fileUtils");
const BranchListContainer = require("./BranchListContainer");

/**
 * @constructor
 * @param {string} path - location of targer repo
 * @param {boolean} readOnly - flag to allow or prevent updates to this repo
 */
class RepoContainer {
  constructor(path, readOnly = true) {
    this._path = path;
    this._readOnly = readOnly;
    // this._ready = false; //true if path exists
    this._error = null; //null if ok, text message otherwise
    this._imA = null; //'working', 'remote', or null

    // this._ready = fs.existsSync(this._path + "/.git");
    this.checkPath();
    this._error = this._imA ? null : `${this._path ? this._path : "null"} is not a valid repo`;

    this._branchList = new BranchListContainer();
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
        if (fileUtils.findTextInFile(path.join(this._path, ".git", "config"), "bare = false")) {
          this._imA = "working";
        } else {
          this._imA = null;
        }
      } else {
        // this._ready = true;
        if (fileUtils.findTextInFile(path.join(this._path, "config"), "bare = true")) {
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
    return {repoType: this._imA, error: this._error};
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = RepoContainer;
}
