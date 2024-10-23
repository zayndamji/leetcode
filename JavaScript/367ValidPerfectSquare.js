// https://leetcode.com/problems/valid-perfect-square/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let i = 0;
  while (i*i < num) {
    i++;
  }

  return i*i == num;
};