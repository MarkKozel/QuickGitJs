import { findTextInFile, getProjRoot } from '../../src/utils/fileUtils.js';
import path from 'path';

describe('Verifies getProjRoot', () => {
  test('Finds project home', () => {
    expect(getProjRoot()).toBe('/home/mark/Development/Projects/npm/quickgitjs')
  });
});

describe("findTextInFile", () => {
  let packageJson = path.join(getProjRoot(), 'package.json');

  test('successful search', () => {
    expect(findTextInFile(packageJson, 'scripts')).toBeTruthy();
  });

  test('failed search', () => {
    expect(findTextInFile(packageJson, 'lkdjfglkjdlfg')).toBeFalsy();
  });

  test('exception reading file', () => {
    expect(findTextInFile(null)).toBeFalsy();
  })
})