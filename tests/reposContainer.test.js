const repoContainer = require("../src/RepoContainer");

describe("instate class", () => {
  test("simple new", () => {
    let repoCont = new repoContainer("");
    expect(repoCont).toBeInstanceOf(repoContainer);
  });
});
