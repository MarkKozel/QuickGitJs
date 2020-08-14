const path = require('path');
const QuickGIT = require('../index');

describe('instate test', ()=> {
  test('requires', () => {
    expect(QuickGIT).not.toBeNull();
  });
});