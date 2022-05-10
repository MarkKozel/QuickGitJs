const fileUtils = require("../../src/utils/fileUtils");
// import { findTextInFile } from "../../src/utils/fileUtils";

console.log(fileUtils.findTextInFile('./fileUtils.js', 'findTextInFile'))

console.log(fileUtils.getProjRoot());