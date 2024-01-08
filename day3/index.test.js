const { MODES } = require('../utils');
const process = require('./index');

const mockData = [
  '467..114..',
  '...*......',
  '..35..633.',
  '......#...',
  '617*......',
  '.....+.58.',
  '..592.....',
  '......755.',
  '...$.*....',
  '.664.598..',
];
describe('Day 3 Test', () => {
  it('Should process the text and return 4361', () => {
    const expectedResult = 4361;

    const result = process(mockData, MODES.SILVER);

    expect(result).toBe(expectedResult);
  });

  it('Should process the text and return 467835', () => {
    const expectedResult = 467835;

    const result = process(mockData, MODES.GOLD);

    expect(result).toBe(expectedResult);
  });
});
