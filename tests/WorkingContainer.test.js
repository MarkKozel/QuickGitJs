const { WorkingContainer } = require("../index");

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

    let working1 = new WorkingContainer(__dirname + "/zz_TestingRepos/workingRepo1");
    expect(working1._imA).toBe('working');
    expect(working1._error).toBeNull();

    let remote1 = new WorkingContainer(__dirname + "/zz_TestingRepos/remoteRepo1.git");
    expect(remote1._imA).toBe('remote');
    expect(remote1._error).toBe('not a valid working repo. Looks like a remote repo')
  })
})