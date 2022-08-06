const path = require('path');
const { getProjRoot } = require("../../src/utils/fileUtils");
const rootPath = getProjRoot();

const testUtilsPath = path.join(rootPath, 'tests', 'utils');
const srcPath = path.join(rootPath, 'src');
const utilsPath = path.join(rootPath, 'src', 'utils');
const testRepoPath = path.join(rootPath, 'tests', 'zz_TestingRepos');


module.exports = { testUtilsPath, srcPath, utilsPath, testRepoPath };