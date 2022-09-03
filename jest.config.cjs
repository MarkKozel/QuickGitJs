const path = require('path');
const testDir = path.join('.', 'tests', 'UnitTests');
const utilsDir = path.join('.', 'tests', 'utils');

module.exports = async () => {
  return {
    // bail: 1,
    verbose: true,

    rootDir: '.',
    roots: ['./src', testDir, utilsDir],

    collectCoverage: true,
    coverageDirectory: path.join(testDir, 'coverage'),

    moduleFileExtensions: ['js', 'mjs'],
    transform: {
      // "^.+\\.(js|jsx|ts)$": "babel-jest",
      '^.+\\.js?$': 'babel-jest'
    },
  };
};