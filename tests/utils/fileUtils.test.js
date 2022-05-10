const { findTextInFile } = require("../../src/utils/fileUtils");

describe("findTextInFile", () => {
  test("searching", () => {
    expect(findTextInFile(__dirname + '/fileUtils.test.js', 'fileUtils')).toBeTruthy();
  })
})