const { MODES } = require("../utils");

const winningNumbersMap = {};
let isFirst = true;

/**
 * 
 * @param {string} line 
 * @param {number} mode 
 */
const getNumber = (line, mode) => {
  const [ _, wNumbers, numbers ] = line.split(/:|\|/);
  if (mode === MODES.SILVER) {
    const winningNumbers = wNumbers.trim().split(' ');
    const nums = numbers.trim().split(/\s+/);
    const wNums = nums.filter((num) => winningNumbers.includes(num));
    wNums.forEach(
      (num) => Object.prototype.hasOwnProperty.call(winningNumbersMap, num) ? winningNumbersMap[num] *= 2 : winningNumbersMap[num] = 1
    );
    const amount = wNums.length * (isFirst? 2 : 1);//wNums.reduce((acc, curr) => acc + winningNumbersMap[curr], 0) * (isFirst? 2 : 1);
    isFirst = false;
    return amount;
  }
} 

/**
 * 
 * @param {string[]} input 
 * @param {number} mode 
 * @returns {number}
 */
const process = (input, mode = MODES.SILVER) => {
  const numbers = input.map((line) => getNumber(line, mode));
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

module.exports = process;