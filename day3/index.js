const { MODES } = require('../utils');

/**
 * @param {char} char
 * @param {number} mode
 * @returns {boolean}
 */
const isMagicCharacter = (char, mode) => mode === MODES.SILVER? /[^0-9.]/.test(char) : /\*/.test(char);

/**
 * @param {char} char
 * @returns {boolean}
 */
const isNum = (char) => /[0-9]/.test(char);

const captureNumber = (line, y) => {
  let num = line[y];
  let colOffset = y - 1;
  while (isNum(line[colOffset])) {
    num = line[colOffset] + num;
    colOffset--;
  }
  colOffset = y + 1;
  while (isNum(line[colOffset])) {
    num = num + line[colOffset];
    colOffset++;
  }
  return Number.parseInt(num);
}

const getNums = (lines, x, y) => {
  const numbers = new Set();
  const offsets = [-1, 0, 1];
  offsets.forEach((col) => {
    offsets.forEach((row) => {
      if (isNum(lines[x + row][y + col])) {
        numbers.add(captureNumber(lines[x + row], y + col));
      }
    })
  });
  return [...numbers];
}

/**
 * 
 * @param {string[]} lines 
 * @param {number} mode 
 */
const getNumbers = (lines, mode) => {
  const numbers = [];
  const rows = lines.length;
  const cols = lines[0].length;
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      if (isMagicCharacter(lines[x][y], mode)) {
        const nums = getNums(lines, x, y);
        if (mode === MODES.SILVER) {
          numbers.push(...nums);
        }
        if (mode === MODES.GOLD && nums.length === 2) {
          numbers.push(nums[0] * nums[1]);
        }
      }
    }
  }
  return numbers;
}

/**
 * 
 * @param {string[]} input 
 * @param {number} mode 
 * @returns {number}
 */
const process = (input, mode = MODES.SILVER) => {
  const numbers = getNumbers(input, mode);
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

module.exports = process;