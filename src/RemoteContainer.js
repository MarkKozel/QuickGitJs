const RepoContainer = require('./RepoContainer');

const fs = require("fs");
const path = require("path");

/**
 * @constructor
 * @param {string} path - location of target repo
 * @param {boolean} readOnly - flag to allow or prevent updates to this repo
 */
class RemoteContainer extends RepoContainer {

  constructor(repoPath, readOnly = true) {
    super(repoPath, readOnly);

    if (this._imA !== 'remote') {
      this._error = 'not a valid remote repo'
      if (this._imA === 'working') {
        this._error += '. Looks like a working repo'
      }
    } else {
      this._repoName = path.basename(repoPath);
    }
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = RemoteContainer;
}