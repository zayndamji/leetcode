// https://leetcode.com/problems/power-of-three/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n == 0) return false;
  if (n == 1) return true;

  let i = 0;
  while (Math.pow(3, i) < n) {
    i++;
  }

  return Math.pow(3, i) == n;
};