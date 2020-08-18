const WorkingContainer = require("../src/WorkingContainer");
const fileUtils = require("../src/utils/fileUtils");

const path = require('path');

let repoCont1 = new WorkingContainer(process.cwd(), true);
console.log(repoCont1.isReady());
console.log(repoCont1.getBranchList())
console.log(repoCont1.getCurrentBranch())


let repoCont2 = new WorkingContainer(path.join(fileUtils.getProjRoot(), "tests", "zz_TestingRepos", "working1"), false);
if (repoCont2.isReady()) {
  console.log(repoCont2.getCurrentBranch())
  console.log(repoCont2.checkoutBranch('br1'));
  console.log(repoCont2.getCurrentBranch())
}

let repoCont3 = new WorkingContainer(path.join(fileUtils.getProjRoot(), "tests", "zz_TestingRepos", "working1"), true);
if (repoCont3.isReady()) {
  console.log(repoCont3.getCurrentBranch())
  console.log(repoCont3.checkoutBranch('br1'));
  console.log(repoCont3.getCurrentBranch())
}