const { execSync } = require('child_process');

/**
 * Used my Repo and Working containers to manage and process repo status info
 * Returns from system calls to git is kinda messy. This class exists to hide that messiness
 */
class StatusContainer {
  constructor(rawStatus = '', short = true) {
    this.rawStatus = rawStatus;
    this.shortStatus = null;
    this.status = null;
    this.short = short;
    if (rawStatus) {
      this.cleanStatus()
    }
  }

  cleanStatus() {
    this.shortStatus = {};

    let statusArray = this.rawStatus.toString().split('\n');
    for (let i = 0; i < statusArray.length; i++) {
      let curStatus = statusArray[i].toString();
      if (curStatus) {
        curStatus = curStatus.toString().trim();
        let parts = curStatus.split(' ');
        this.shortStatus[i] = ({ state: parts[0], file: parts[1] })
      }
    }
    return this.shortStatus;
  }

  retrieveStatus(path, short = true) {
    let cmd = null;
    if (short) {
      cmd = `git --git-dir=${path}/.git status --short`;
    } else {
      cmd = `git --git-dir=${path}/.git status`;
    }
    const status = execSync(cmd);
    this.rawStatus = status;
    return this.rawStatus;
  }

  getShortStatus(path) {
    this.retrieveStatus(path, true);
    this.shortStatus = this.cleanStatus();

    return this.shortStatus;
  }

  shortStatusToString() {
    let result = '';
    if (this.shortStatus) {
      for (const el in this.shortStatus) {
        result += this.shortStatus[el].state + "\t" + this.shortStatus[el].file + "\n";
      }
    }
    return result
  }
}


if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = StatusContainer;
}