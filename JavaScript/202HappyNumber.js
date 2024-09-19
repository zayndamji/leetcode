// https://leetcode.com/problems/happy-number/
// Language: JavaScript

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (n == 1 || n == 7) return true;
  else if (n / 10 < 1) return false;

  return isHappy(Array.from(n.toString()).reduce((total, num) => {
    return total + parseInt(num)*parseInt(num);
  }, 0));
};