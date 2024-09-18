// https://leetcode.com/problems/sqrtx/
// Language: JavaScript

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x == 1 || x == 0) return x;

  for (let i = 1; i <= x; i++) {
    if ((i*i <= x) && ((i+1)*(i+1) > x)) {
      return i;
    }
  }
};