const git = require("./utils/gitUtils");

/**
 * Used my Repo and Working containers to manage and process repo status info
 * Returns from system calls to git is kinda messy. This class exists to hide that messiness
 */
class UpdateWorking {
  constructor(path) {
    this._path = path;
    this._git = new git();
  }

  //Pulls updates from Remote Repo into Working repo
  fetch(){
    let cmd = `git --git-dir=${this._path}/.git fetch --all --short`;
    let fetchResult = this._git.execute(cmd);
  }

  add(list){

  }
  
  commit(msg){

  }
}


if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = UpdateWorking;
}