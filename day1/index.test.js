const { MODES } = require('../utils');
const process = require('./index');

describe('Day 1 Test', () => {
  it('Should process the text and return 142', () => {
    const mockData = [
      '1abc2',
      'pqr3stu8vwx',
      'a1b2c3d4e5f',
      'treb7uchet',
    ];
    const expectedResult = 142;

    const result = process(mockData, MODES.SILVER);

    expect(result).toBe(expectedResult);
  });

  it('Should process the text and return 281', () => {
    const mockData = [
      'two1nine',
      'eightwothree',
      'abcone2threexyz',
      'xtwone3four',
      '4nineeightseven2',
      'zoneight234',
      '7pqrstsixteen',
    ];
    const expectedResult = 281;

    const result = process(mockData, MODES.GOLD);

    expect(result).toBe(expectedResult);
  })
})