const RepoContainer = require('./RepoContainer');

const fs = require("fs");
const path = require("path");

class WorkingFolder extends RepoContainer{

  constructor(path, readOnly = true){
    super(path, readOnly);

    super._ready = fs.existsSync(this._path + "/.git");
    super._error = super._ready ? "" : `${this._path ? this._path : "null"} is not a repo`;

  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = WorkingFolder;
}