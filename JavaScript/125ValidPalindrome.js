// https://leetcode.com/problems/valid-palindrome/
// Language: JavaScript

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  for (let i = 0; i < Math.floor(s.length/2); i++) {
    if (s[i] != s[s.length-i-1]) return false;
  }

  return true;
};