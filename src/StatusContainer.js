import { git } from './utils/gitUtils.js';

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
    if (this.rawStatus) {
      this.parseStatus()
    }
    this._git = new git();
  }

  /**
   * Translates raw Git output into string and determines the current status
   * @param {string} [rawStatus=this.rawStatus] - raw output from git
   * @param {boolean} [updateLocal=true] - updates this.shortStatus when true
   * @returns {array} array of objects, containing 'state' and 'file' elements
   */
  parseStatus(rawStatus = this.rawStatus, updateLocal = true) {
    let newStatus = [];

    let statusArray = rawStatus.toString().split('\n');
    for (let i = 0, len = statusArray.length; i < len; i++) {
      let curStatus = statusArray[i].toString();
      if (curStatus) {
        curStatus = curStatus.toString().trim();
        let parts = curStatus.split(' ');
        newStatus.push({ state: parts[0], file: parts[1] });
      }
    }
    if (updateLocal) {
      this.shortStatus = newStatus;
    }
    return newStatus;
  }

  /**
   * Gets current status
   * @param {*} path - path to repo
   * @param {*} short - flag for short or regular status
   * @returns raw status
   */
  retrieveStatus(path, short = true) {
    let cmd = null;
    if (!path) {
      return false;
    }

    if (short) {
      cmd = `git --git-dir=${path}/.git status --short`;
    } else {
      cmd = `git --git-dir=${path}/.git status`;
    }
    this.rawStatus = this._git.execute(cmd);
    return this.rawStatus;
  }

  /**
   * Public method to request short status. Updates status from repo
   * @param {*} path - path to repo
   * @returns short status
   */
  getShortStatus(path) {
    if (!path) {
      return false;
    }

    this.retrieveStatus(path, true);
    this.shortStatus = this.parseStatus();

    return this.shortStatus;
  }

  /**
   * Pretty print of current short status
   * @Pretty print of current short status
   */
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

export { StatusContainer };