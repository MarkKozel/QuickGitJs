const path = require('path');
const { WorkingContainer } = require('../index');
const { RemoteContainer } = require('../index');

describe('instate test', () => {
  test('WorkingContainer requires', () => {
    expect(WorkingContainer).not.toBeNull();
  });
  test('RemoteContainer requires', () => {
    expect(RemoteContainer).not.toBeNull();
  });

  // test('quickgit', () => {
  //   expect(WorkingContainer.quickgit()).not.toBeNull();
  // })

  // test('workingDir', () => {
  //   expect(WorkingContainer.workingDir()).not.toBeNull();
  // })
});