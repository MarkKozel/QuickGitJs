const WorkingContainer = require("../src/WorkingContainer");

let repoCont1 = new WorkingContainer(process.cwd(), true);
console.log(repoCont1.isReady());
console.log(repoCont1.getBranchList())
console.log(repoCont1.getCurrentBranch())
