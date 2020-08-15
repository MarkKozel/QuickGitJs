const repoContainer = require("../src/RepoContainer");
// const path = require("path");

let repoCont = new repoContainer("");
console.log(repoCont.isReady());


let repoCont1 = new repoContainer(process.cwd());
console.log(repoCont1.isReady());