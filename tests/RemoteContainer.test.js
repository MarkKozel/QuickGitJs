const { RemoteContainer } = require("../index");

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

    let working = new RemoteContainer(__dirname + "/zz_TestingRepos/workingRepo1");
    expect(working._imA).toBe('working');
    expect(working._error).not.toBeNull();

    let remote1 = new RemoteContainer(__dirname + "/zz_TestingRepos/remoteRepo1.git");
    expect(remote1._imA).toBe('remote');
    expect(remote1._error).toBeNull();
  })
})