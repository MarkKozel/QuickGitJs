const path = require('path');
const { srcPath } = require('./config.js');
const statusContainer = require(path.join(srcPath, 'StatusContainer'));

console.log(statusContainer);

describe("instate class", () => {
  test("simple new", () => {
    let stCont = new statusContainer();
    expect(stCont).toBeInstanceOf(statusContainer);
    expect(stCont.rawList).toBeUndefined();
    expect(stCont.short).toBeTruthy();
    expect(stCont.shortStatus).toBe(null);
    expect(stCont.status).toBe(null);
  });

  test("w/ params", () => {
    let stCont = new statusContainer('', false);
    expect(stCont).toBeInstanceOf(statusContainer);
    expect(stCont.rawList).toBeUndefined();
    expect(stCont.short).toBeFalsy();
    expect(stCont.shortStatus).toBe(null);
    expect(stCont.status).toBe(null);
  });
});