const WorkingFolder = require("../src/WorkingFolder");

describe("instate class", () => {
  test("simple new", () => {
    let working = new WorkingFolder("");
    expect(working).toBeInstanceOf(WorkingFolder);
  });
});

describe("inheritence verification", ()=> {
  test("constructor values", ()=> {
    let working = new WorkingFolder("");
    expect(working._ready).toBe(false)
    expect(working._error).toBe('null is not a repo')

    // let working1 = new WorkingFolder("./zz_TestingRepos/working1");    
    // expect(working1._ready).toBe(true);
    // expect(working1._error).toBeNull();
  })
})