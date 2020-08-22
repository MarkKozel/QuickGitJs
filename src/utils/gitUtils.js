const { execSync } = require('child_process');

class git {
  constructor() {
    if (!git._instance) {
      this.lastCmd = null;
      this.lastResult = null;
      this.lastError = null;

      git._instance = this;
    } else {
      return git._instance
    }
  }

  /**
   * Makes system call to git
   * @param {string} cmd - git command
   * @param {string} path - optional path
   * @returns {string} results of git call
   */
  execute(cmd, path = '') {
    this.lastCmd = cmd;
    this.lastResult = execSync(this.lastCmd,
      {
        timeout: 5000,
        encoding: 'utf8',
        maxBuffer: 1024 * 10,
        cwd: null
      });
    return this.lastResult;
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = git;
}