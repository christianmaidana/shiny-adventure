# Advent of Code

Project to implement solution to the [advent of code](https://adventofcode.com/). 

## Usage

Each challenge is implemented on a separated folder with the following files:
1) index.js: File that contains the solution to the challenge
2) index.test.js: File to test possible scenarios
3) input.csv: Input file provided in the challenge
4) Readme.md: Challenge description

## Execution

In order to run some particular challenge run the following command:

```sh
TASK=<number> MODE=<mode> node index.js
```

Being 
- *number*: the challenge number
- *mode*: 'SILVER' or 'GOLD'