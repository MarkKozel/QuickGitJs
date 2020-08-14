const path = require('path');
const QuickGIT = require('../index');

describe('instate test', ()=> {
  test('requires', () => {
    expect(QuickGIT).not.toBeNull();
  });

  test('quickgit', () => {
    expect(QuickGIT.quickgit()).not.toBeNull();
  })

  test('workingDir', () => {
    expect(QuickGIT.workingDir()).not.toBeNull();
  })
});