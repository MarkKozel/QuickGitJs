import fs from 'fs';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Searches for needle in the haystack file. Returns true if found, false 
 * if not found of file read error
 * @param {String} haystack - Path/Filename to read
 * @param {String} needle - Things to look for in the haystack
 * @returns 
 */
function findTextInFile(haystack, needle) {
  try {
    let data = fs.readFileSync(haystack);
    if (data.includes(needle)) {
      return true
    }
  } catch (errors) {
    return false;
  }

  return false;
}

/**
 * gets project root path, based on being 2 levels up from this file
 * @returns {String} path to project root
 */
function getProjRoot() {
  return path.join(__dirname, '..', '..');
}

export { findTextInFile, getProjRoot };