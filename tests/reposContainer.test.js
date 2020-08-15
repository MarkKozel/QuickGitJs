const repoContainer = require("../src/RepoContainer");

describe("instate class", () => {
  test("simple new", () => {
    let repoCont = new repoContainer("");
    expect(repoCont).toBeInstanceOf(repoContainer);
  });
});

describe("inheritence verification", () => {
  test("constructor values", () => {
    let working = new repoContainer("");
    expect(working._ready).toBe(false);
    expect(working._error).toBe("null is not a repo");

    let working1 = new repoContainer("./zz_TestingRepos/working1");
    expect(working1._ready).toBe(true);
    expect(working1._error).toBeNull();
  });
});
