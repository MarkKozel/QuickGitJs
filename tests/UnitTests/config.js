import path from 'path';
import { getProjRoot } from '../../src/utils/fileUtils';
const rootPath = getProjRoot();

const testUtilsPath = path.join(rootPath, 'tests', 'utils');
const srcPath = path.join(rootPath, 'src');
const utilsPath = path.join(rootPath, 'src', 'utils');
const testRepoPath = path.join(rootPath, 'tests', 'zz_TestingRepos');


export { testUtilsPath, srcPath, utilsPath, testRepoPath };