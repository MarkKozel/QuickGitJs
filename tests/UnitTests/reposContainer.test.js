const path = require('path');
const { srcPath, testRepoPath } = require('./config.js');
const repoContainer = require(path.join(srcPath, 'RepoContainer'));

describe("instate class", () => {
  test("simple new", () => {
    let repoCont = new repoContainer("");
    expect(repoCont).toBeInstanceOf(repoContainer);
  });
});

describe("inheritence verification", () => {
  test("constructor values", () => {
    let working = new repoContainer("");
    expect(working._imA).toBeNull();
    expect(working._error).toBe("null is not a valid repo");

    let working1 = new repoContainer(path.join(testRepoPath, "workingRepo1"));
    expect(working1._imA).toBe('working');
    expect(working1._error).toBeNull();
  });
});
