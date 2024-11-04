// https://leetcode.com/problems/add-digits/
// Time Spent: 4 minutes

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num / 10 < 1) return num;

  return addDigits(Array.from(num.toString()).reduce((prev, cur) => prev + parseInt(cur), 0));
};