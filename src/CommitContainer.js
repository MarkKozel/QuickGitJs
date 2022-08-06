const { git } = require("./utils/gitUtils");

class CommitContainer {
  constructor(path) {
    this._path = path;
    this._git = new git();

    this._simpleFormat = '"AbHash: %h%nAuthor: %an%nCommited: %ci%nCommit Rel: %cr%nSubject: %s%n"';

    this._simpleFormatJson = '"{%x22AbHash%x22: %x22%h%x22,%x22Author%x22: %x22%an%x22,%x22Commited%x22: %x22%ci%x22,%x22CommitRel%x22: %x22%cr%x22,%x22Subject%x22: %x22%s%x22}"';
  }

  getLastCommit(simple = true, json = false) {
    let result = "no path to repo";

    if (this._path) {
      let cmd = '';
      if (simple) {
        if (json) {
          cmd = `git --git-dir=${this._path}/.git show --format=${this._simpleFormatJson} -s`;
        } else {
          cmd = `git --git-dir=${this._path}/.git show --format=${this._simpleFormat} -s`;
        }
      } else {

      }
      result = this._git.execute(cmd);
      if (json) {
        result = JSON.parse(result);
      }
    }
    return result;
  }
}

module.exports = CommitContainer;
