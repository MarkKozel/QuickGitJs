const path = require('path');
const { testRepoPath } = require('./config.js');
const RemoteContainer = require("../../index");

describe("instate class", () => {
  test("simple new", () => {
    let remote = new RemoteContainer("");
    expect(remote).toBeInstanceOf(RemoteContainer);
  });
});

describe("inheritance verification", () => {
  test("constructor values", () => {
    let remote = new RemoteContainer("");
    expect(remote._imA).toBeNull()
    expect(remote._error).not.toBeNull();

    let working = new RemoteContainer(path.join(testRepoPath, "workingRepo1"));
    expect(working._imA).toBe('working');
    // expect(working._error).not.toBeNull();

    let remote1 = new RemoteContainer(path.join(testRepoPath, "remoteRepo1.git"));
    expect(remote1._imA).toBe('remote');
    // expect(remote1._error).toBeNull();
    expect(remote1.myStatus()).not.toBeNull();
  })
})