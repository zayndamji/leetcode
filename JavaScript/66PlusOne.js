// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let index = -1;
  digits[digits.length+index] += 1;

  while (digits[digits.length+index] > 9) {
    digits[digits.length+index] = 0;
    if (digits[digits.length+index-1] == undefined) {
      digits.unshift(1);
    } else {
      digits[digits.length+index-1] += 1;
    }
    index -= 1;
  }

  return digits;
};