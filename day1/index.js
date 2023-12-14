const { MODES } = require("../utils");

const regex = /(one|two|three|four|five|six|seven|eight|nine)/gi;
const replacements = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};


const textToNumber = (line) => 
  line.toLowerCase().replace(regex, (match, word) => {
    return replacements[word].toString();
  });

const getNumber = (line, mode) => {
  let firstNumber = Number.NaN, lastNumber = Number.NaN;
  let leftIt = 0;
  if (mode === MODES.GOLD) {
    console.log(`${line}  => ${textToNumber(line)}`);
    line = textToNumber(line);
  }
  let rightIt = line.length - 1;

  while (Number.isNaN(firstNumber) && leftIt < line.length) {
    firstNumber = Number.parseInt(line[leftIt++]);
  }

  while (Number.isNaN(lastNumber) && rightIt >= 0) {
    lastNumber = Number.parseInt(line[rightIt--]);
  }
  console.log("Numbers:: ", firstNumber, lastNumber);
  return (firstNumber * 10) + lastNumber;
};

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