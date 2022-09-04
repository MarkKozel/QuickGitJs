import path from 'path';

import { StatusContainer } from '../../src/StatusContainer';
import { testRepoPath } from './config';

test("instate class simple new", () => {
  let stCont = new StatusContainer();
  expect(stCont).toBeInstanceOf(StatusContainer);
  expect(stCont.rawList).toBeUndefined();
  expect(stCont.short).toBeTruthy();
  expect(stCont.shortStatus).toBe(null);
  expect(stCont.status).toBe(null);
});

test("instate class w/ params", () => {
  let stCont = new StatusContainer('', false);
  expect(stCont.rawStatus).toBe('');
  expect(stCont.short).toBeFalsy();
  expect(stCont.shortStatus).toBe(null);
  expect(stCont.status).toBe(null);

  const result = { file: 'MyFile', state: 'MyState' };
  const input = `${result.state} ${result.file}`;

  let stCont1 = new StatusContainer(input, false);
  expect(stCont1.rawStatus).toBe(input);
  expect(stCont1.parseStatus()).toEqual([result]);
});

test('parseStatus', () => {
  const result1 = { file: 'MyFile1', state: 'MyState1' };
  const result2 = { file: 'MyFile2', state: 'MyState2' };
  const input12 = `${result1.state} ${result1.file}\n${result2.state} ${result2.file}`;
  const input21 = `${result2.state} ${result2.file}\n${result1.state} ${result1.file}`;
  let stCont1 = new StatusContainer(input12, false);

  //updateLocal true
  expect(stCont1.parseStatus(input12)).toEqual([result1, result2]);
  expect(stCont1.shortStatus).toEqual([result1, result2]);

  //updateLocal false
  expect(stCont1.parseStatus(input21, false)).toEqual([result2, result1]);
  expect(stCont1.shortStatus).toEqual([result1, result2]);
});

test('retrieveStatus', () => {
  let stCont = new StatusContainer();
  expect(stCont.retrieveStatus()).toBeFalsy();

  let stCont1 = new StatusContainer();
  expect(stCont1.retrieveStatus(path.join(testRepoPath, 'workingRepo1'))).not.toBeNull();
  expect(stCont1.retrieveStatus(path.join(testRepoPath, 'workingRepo1'), false)).not.toBeNull();

  let stCont2 = new StatusContainer(path.join(testRepoPath, 'workingRepo1'));
  expect(stCont2.retrieveStatus()).not.toBeNull();
})

test('getShortStatus', () => {
  let stCont = new StatusContainer();
  expect(stCont.getShortStatus()).toBeFalsy();

  let stCont1 = new StatusContainer();
  const initStatus = stCont1.shortStatus;
  const updateStatus = stCont1.getShortStatus(path.join(testRepoPath, 'workingRepo1'))
  expect(updateStatus).not.toBeNull();
  expect(updateStatus).not.toEqual(initStatus);

})

test('shortStatusToString', () => {
  let stCont = new StatusContainer();
  expect(stCont.getShortStatus()).toBeFalsy();

  let stCont1 = new StatusContainer();
  stCont1.retrieveStatus(path.join(testRepoPath, 'workingRepo1'));
  expect(stCont1.shortStatusToString()).toBeFalsy();
  stCont1.getShortStatus(path.join(testRepoPath, 'workingRepo1'));
  expect(stCont1.shortStatusToString()).not.toBeNull();
})