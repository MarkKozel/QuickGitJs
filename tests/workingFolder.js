const WorkingContainer = require("../src/WorkingContainer");
const getProjRoot = require("../src/utils/fileUtils").getProjRoot;

const path = require('path');
const git = require('../src/utils/gitUtils');

let repoCont1 = new WorkingContainer(process.cwd(), true);
console.log(repoCont1.isReady());
// console.log(repoCont1.getBranchList())
console.log(repoCont1.getCurrentBranch())
console.log(repoCont1.getLog())


let repoCont2 = new WorkingContainer(path.join(getProjRoot(), "tests", "zz_TestingRepos", "working1"), false);
if (repoCont2.isReady()) {
  console.log(repoCont2.getCurrentBranch())
  console.log(repoCont2.checkoutBranch('br1'));
  console.log(repoCont2.getCurrentBranch())
  console.log(repoCont2.getLog())
}

let repoCont3 = new WorkingContainer(path.join(getProjRoot(), "tests", "zz_TestingRepos", "working1"), true);
if (repoCont3.isReady()) {
  console.log(repoCont3.getCurrentBranch())
  console.log(repoCont3.checkoutBranch('br1'));
  console.log(repoCont3.getCurrentBranch());
  console.log(repoCont3.getStatus())
  console.log(repoCont3.getLog())
}

gitSingleton = new git();
console.log(`Last Command: ${gitSingleton.lastCmd}`);
console.log(`Last Result: ${gitSingleton.lastResult}`);
console.log(`Last Error: ${gitSingleton.lastError}`);