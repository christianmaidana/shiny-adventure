const day1 = require('./day1/');
const day2 = require('./day2/');
const { readFile, MODES } = require('./utils');

const methods = {
  1: day1,
  2: day2,
};

const taskNumber = process.env.TASK ?? 1;
const mode = MODES[process.env.MODE ?? 'GOLD'];

const filename = `./day${taskNumber}/input.csv`;

console.log(`Executing sample for day ${taskNumber} (${mode === MODES.GOLD? 'gold' : 'silver'}) ...`);
console.log('------------------------------');
if (!Object.prototype.hasOwnProperty.call(methods, taskNumber)) {
  console.log('Day not implemented yet! :(');
  console.log('------------------------------');
  return 0;
}
const data = readFile(filename);
console.time('Performance');
const result = methods[taskNumber](data, mode);
console.timeEnd('Performance');
console.log(`Result: ${result}`);
console.log('------------------------------');
