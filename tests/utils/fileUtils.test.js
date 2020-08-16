const fileUtils = require("../../src/utils/fileUtils");
// import { findTextInFile } from "../src/utils/fileUtils";

describe("findTextInFile", () => {
  test("searching", () => {
    expect(fileUtils.findTextInFile(__dirname + '/fileUtils.test.js', 'fileUtils')).toBeTruthy();
  })
})