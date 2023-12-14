const fs = require('node:fs');

const MODES = {
  SILVER: 1,
  GOLD: 2,
};

/**
 * 
 * @param {string} filename 
 * @returns {string[]}
 */
const readFile = (filename) => {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    return data.split('\n');
  } catch (err) {
    console.error(err);
    return null;
  }
}

module.exports = {
  readFile,
  MODES,
}