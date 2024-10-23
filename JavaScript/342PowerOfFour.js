// https://leetcode.com/problems/power-of-four/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  if (n == 0) return false;
  if (n == 1) return true;

  let i = 0;
  while (Math.pow(4, i) < n) {
    i++;
  }

  return Math.pow(4, i) == n;
};