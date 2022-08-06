const path = require('path');
const testDir = path.join('.', 'tests', 'UnitTests');

module.exports = async () => {
  return {
    // bail: 1,
    verbose: true,

    rootDir: '.',
    roots: [
      './src',
      testDir
    ],

    collectCoverage: true,
    coverageDirectory: path.join(testDir, 'coverage'),
  };
};