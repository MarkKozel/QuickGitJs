import { git } from '../../src/utils/gitUtils.js';
import path from 'path';

test('GitUtils Constructor', () => {
  expect(git).toBeDefined();
  const myGit = new git();
  expect(myGit).toBeInstanceOf(git);

  const myGit1 = new git(); //return same instance as myGit
  expect(myGit1).toBeInstanceOf(git);

  expect(myGit).toStrictEqual(myGit1)
});

test('GitUtils Execute', () => {
  const myGit = new git();
  expect(myGit.execute).toBeDefined()
  expect(myGit.execute('git --version')).not.toBeNull();
});
