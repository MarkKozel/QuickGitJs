const stContainer = require("../src/StatusContainer");

const fileUtils = require("../src/utils/fileUtils").getProjRoot;

describe("instate class", () => {
  test("simple new", () => {
    let stCont = new stContainer();
    expect(stCont).toBeInstanceOf(stContainer);
    expect(stCont.rawList).toBeUndefined();
    expect(stCont.short).toBeTruthy();
    expect(stCont.shortStatus).toBe(null);
    expect(stCont.status).toBe(null);
  });

  test("w/ params", () => {
    let stCont = new stContainer('', false);
    expect(stCont).toBeInstanceOf(stContainer);
    expect(stCont.rawList).toBeUndefined();
    expect(stCont.short).toBeFalsy();
    expect(stCont.shortStatus).toBe(null);
    expect(stCont.status).toBe(null);
  });
});