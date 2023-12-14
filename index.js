const day1 = require('./day1/');
const { readFile, MODES } = require('./utils');

const methods = {
  1: day1,
};

const taskNumber = 1;
const mode = MODES.GOLD;

const filename = `./day${taskNumber}/input.${mode}.csv`;

console.log(`Executing sample for day ${taskNumber}...`);
console.log('------------------------------');
const data = readFile(filename);
console.time('Performance');
const result = methods[taskNumber](data, mode);
console.timeEnd('Performance');
console.log(`Result: ${result}`);
console.log('------------------------------');
