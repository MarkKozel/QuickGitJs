class BranchListContainer {
  constructor(rawList = '') {
    if (rawList) {
      this.rawList = rawList;
      this.cleanList()
    }
  }

  /**
   * Modifies branch list
   * @param {string} rawList raw output from Git
   */
  updateList(rawList) {
    if (rawList) {
      this.rawList = rawList;
      this.cleanList()
    }
  }

  /**
   * Translates raw Git output into array and determines the current branch
   */
  cleanList() {
    this.branchArray = this.rawList.toString().split('\n')

    this.branchArray = this.branchArray.filter(e => e.trim() !== ''); //rm empty entries

    //Find current Branch
    this.currentBranchIndex = -1;
    for (let i = 0; i < this.branchArray.length; i++) {
      let curBranch = this.branchArray[i].toString();
      if (curBranch[0] === '*') { //Find current Branch
        this.currentBranchIndex = i;
        curBranch = curBranch.substring(1);
      }
      //clean up each entry
      curBranch = curBranch.toString().trim();
      this.branchArray[i] = curBranch;
    }
  }
  getList() {
    return this.branchArray;
  }

  /**
   * returns name of master branch
   * @returns {string} main branch name
   */
  getCurrentBranch() {
    return this.branchArray[this.currentBranchIndex];
  }

  branchExists(branchName) {
    return (this.branchArray.indexOf(branchName) > -1)
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = BranchListContainer;
}