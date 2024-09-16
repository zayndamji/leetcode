// https://leetcode.com/problems/palindrome-number/
// Language: JavaScript
// Runtime: 125 MS
// Memory: 59.01 MB

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return Array.from(x.toString()).reverse().join("") == x;
};