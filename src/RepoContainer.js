const fs = require("fs");
const path = require("path");

/**
 * @constructor
 * @param {string} path - location of targer repo
 * @param {boolean} readOnly - flag to allow or prevent updates to this repo
 */
class RepoContainer {
  constructor(path, readOnly = true) {
    this._path = path;
    this._readOnly = readOnly;
    this._ready = false;
    this._error = "";

    this._ready = fs.existsSync(this._path + "/.git");
    this._error = this._ready ? "" : `${this._path ? this._path : "null"} is not a repo`;

  }

  isReady() {
    return { ready: this._ready, error: this._error };
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = RepoContainer;
}
