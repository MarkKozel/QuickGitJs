import { logger } from '../../src/utils/logger.js';

test('Logger Constructor', () => {
  expect(logger).toBeDefined();
  const myLogger = new logger();
  expect(myLogger).toBeInstanceOf(logger);

  const myLogger1 = new logger(); //return same instance as myGit
  expect(myLogger1).toBeInstanceOf(logger);

  expect(myLogger).toStrictEqual(myLogger1)
});

test('Logger logs', () => {
  const myLogger = new logger();

  expect(myLogger.logs).toHaveLength(0);
  expect(myLogger.getRawLog()).toHaveLength(0);

  myLogger.log('logOne');
  expect(myLogger.logs).toHaveLength(1);
  expect(myLogger.logs).toEqual(expect.arrayContaining([expect.stringMatching('logOne')]))
});

test('Logger Output', () => {
  const myLogger = new logger();
  myLogger.log('logTwo');

  const result = myLogger.getPrettyLogs();
  expect(result).toEqual(expect.stringContaining('logTwo'))
});