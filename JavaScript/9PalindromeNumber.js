// https://leetcode.com/problems/palindrome-number/
// Language: JavaScript

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return Array.from(x.toString()).reverse().join("") == x;
};