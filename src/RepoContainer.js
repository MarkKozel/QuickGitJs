const fs = require("fs");
const path = require("path");

/**
 * @constructor
 * @param {string} path - location of targer repo
 * @param {boolean} readOnly - flag to allow or prevent updates to this repo
 */
class RepoContainer {
  constructor(path, readOnly = true) {
    this.path = path;
    this.readOnly = readOnly;
    this.ready = false;
    this.error = "";

    this.ready = fs.existsSync(path + "/.git");
    this.error = this.ready ? "" : `${path ? path : "null"} is not a repo`;

  }

  isReady() {
    return { ready: this.ready, error: this.error };
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = RepoContainer;
}
