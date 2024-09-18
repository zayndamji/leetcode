// https://leetcode.com/problems/length-of-last-word/
// Language: JavaScript

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  return s.trim().split(' ').at(-1).length;
};