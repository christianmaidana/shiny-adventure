const { MODES } = require("../utils");

const reverseString = (text) => text.split('').reverse().join('');
const numbersString = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
const numbersStringRev = numbersString.map(reverseString);

const replacements = numbersString.reduce(
  (acc, curr, it) => 
    Object.assign(acc, {[curr]: it+1}),
    Object.create(null),
);

const replacementsRev = numbersStringRev.reduce(
  (acc, curr, it) => 
    Object.assign(acc, {[curr]: it+1}),
    Object.create(null),
);

const regex = new RegExp(`(${numbersString.join('|')})`, 'gi');
const regexReverse = new RegExp(`(${numbersStringRev.join('|')})`, 'gi');

const textToNumberRev = (line) => 
  reverseString(line)
    .toLowerCase()
    .replaceAll(
      regexReverse,
      (_, word) => replacementsRev[word].toString(),
    );

const textToNumberNormal = (line) => 
  line.toLowerCase()
    .replaceAll(
      regex,
      (_, word) => replacements[word].toString(),
    );

const textToNumber = (line, reverse = false) => reverse? textToNumberRev(line) : textToNumberNormal(line);

const getNumber = (line, mode) => {
  let firstNumber = Number.NaN, lastNumber = Number.NaN;
  let leftIt = 0, rightIt = line.length - 1;
  if (mode === MODES.GOLD) {
    const lineRev = textToNumber(line, true);
    line = textToNumber(line);
    rightIt = 0;
  
    while (Number.isNaN(lastNumber) && rightIt < lineRev.length) {
      lastNumber = Number.parseInt(lineRev[rightIt++]);
    }
  } else {  
    while (Number.isNaN(lastNumber) && rightIt >= 0) {
      lastNumber = Number.parseInt(line[rightIt--]);
    }
  }

  while (Number.isNaN(firstNumber) && leftIt < line.length) {
    firstNumber = Number.parseInt(line[leftIt++]);
  }
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