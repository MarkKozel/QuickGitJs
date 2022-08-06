const path = require('path');
const { testRepoPath } = require('./config.js');
const WorkingContainer = require("../../index");

describe("instate class", () => {
  test("simple new", () => {
    let working = new WorkingContainer("");
    expect(working).toBeInstanceOf(WorkingContainer);
  });
});

describe("inheritance verification", () => {
  test("constructor values", () => {
    let working = new WorkingContainer("");
    expect(working._imA).toBeNull()
    expect(working._error).toBe('not a valid working repo')

    let working1 = new WorkingContainer(path.join(testRepoPath, "workingRepo1"));
    expect(working1._imA).toBe('working');
    expect(working1._error).toBeNull();
    expect(working1.myStatus()).not.toBeNull();

    let remote1 = new WorkingContainer(path.join(testRepoPath, "remoteRepo1.git"));
    expect(remote1._imA).toBe('remote');
    expect(remote1._error).toBe('not a valid working repo. Looks like a remote repo')
  })
})