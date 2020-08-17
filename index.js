const RepoContainer = require("./src/RepoContainer");

exports.quickgit = function() {
  console.log("This is a message from the demo package");
}

exports.workingDir = function() {
  console.log("This is a working directory");
}

const repoContainer = require('./src/RepoContainer');
exports.RepoContainer = repoContainer;

const workingContainer = require('./src/WorkingContainer');
exports.WorkingContainer = workingContainer;