// https://leetcode.com/problems/valid-palindrome/
// Language: JavaScript

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // remove non-alphanumeric characters, convert to lowercase to ignore case
  s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  for (let i = 0; i < Math.floor(s.length/2); i++) {
    // if position i doesn't equal the character at -i, the string must not be a palindrome, so return false
    if (s[i] != s[s.length-i-1]) return false;
  }

  // string must be a palindrome, so return true
  return true;
};