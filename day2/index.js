const { MODES } = require('../utils');

const CUBES = {
  red: 12,
  green: 13,
  blue: 14,
};

const getGameId = (line) => /Game (\d+):/g.exec(line)[1];

/**
 * 
 * @param {string} turn 
 */
const validTurn = (turn) => {
  const takes = turn.split(',');
  for (let x = 0; x < takes.length; x++) {
    const [ amount, color ] = takes[x].trim().split(' ');
    if (CUBES[color] < amount) {
      return false;
    }
  }
  return true;
}


/**
 * 
 * @param {string} turns 
 * @returns {red: number; green: number; blue: number}
 */
const turnsAmount = (turns) => {
  const colors = {
    red: 0,
    green: 0,
    blue: 0
  };
  const numbersAndColors = turns.match(/\d+|\w+/g);
  for (let x = 0; x < numbersAndColors.length; x+=2) {
    const amount = +numbersAndColors[x];
    const color = numbersAndColors[x + 1];
    colors[color] < amount && (colors[color] = amount);
  }
  return colors;
}

/**
 * 
 * @param {string} line 
 * @param {number} mode 
 */
const getNumber = (line, mode) => {
  const turnsString = line.split(':')[1];
  if (mode === MODES.SILVER) {
    const turns = turnsString.split(';');
    const gameId = getGameId(line);
    for (let x=0; x < turns.length; x++) {
      if (!validTurn(turns[x])) {
        return 0;
      }
    }
    return Number.parseInt(gameId);
  }
  const colors = turnsAmount(turnsString);
  return Object.values(colors).reduce((acc, curr) => acc * curr, 1);
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