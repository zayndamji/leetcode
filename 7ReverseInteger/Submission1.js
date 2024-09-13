// https://leetcode.com/problems/reverse-integer/
// Language: JavaScript
// Runtime: 60 MS
// Memory: 52.71 MB

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let num = Array.from(x.toString()).reverse();
  if (num[num.length-1] == '-') {
      num.unshift('-');
      num = num.slice(0, -1);
  }

  num = parseInt(num.join(''));
  if (num > 2147483647 || num < -2147483648) num = 0;

  return num;
};