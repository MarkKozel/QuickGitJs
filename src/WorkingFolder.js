const RepoContainer = require('./RepoContainer');

const fs = require("fs");
const path = require("path");

class WorkingFolder extends RepoContainer {

  constructor(path, readOnly = true) {
    super(path, readOnly);
    if (this._imA !== 'working') {
      this._error = 'not a valid working repo'
      if (this._imA === 'remote') {
        this._error += '. Looks like a remote repo'
      }
    }
  }

  isReady() {
    let base = super.isReady();
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = WorkingFolder;
}