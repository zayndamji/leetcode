// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Language: JavaScript

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length == 0) return [];

  const letters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }

  const combinations = [];

  if (digits.length == 1) {
    for (let i = 0; i < letters[digits[0]].length; i++) {
      combinations.push(letters[digits[0]][i]);
    }
  } else if (digits.length == 2) {
    for (let i = 0; i < letters[digits[0]].length; i++) {
      for (let j = 0; j < letters[digits[1]].length; j++) {
        combinations.push(letters[digits[0]][i] + letters[digits[1]][j]);
      }
    }
  } else if (digits.length == 3) {
    for (let i = 0; i < letters[digits[0]].length; i++) {
      for (let j = 0; j < letters[digits[1]].length; j++) {
        for (let k = 0; k < letters[digits[2]].length; k++) {
          combinations.push(letters[digits[0]][i] + letters[digits[1]][j] + letters[digits[2]][k]);
        }
      }
    }
  } else if (digits.length == 4) {
    for (let i = 0; i < letters[digits[0]].length; i++) {
      for (let j = 0; j < letters[digits[1]].length; j++) {
        for (let k = 0; k < letters[digits[2]].length; k++) {
          for (let l = 0; l < letters[digits[3]].length; l++) {
            combinations.push(letters[digits[0]][i] + letters[digits[1]][j] + letters[digits[2]][k] + letters[digits[3]][l]);
          }
        }
      }
    }
  }

  return combinations;
};