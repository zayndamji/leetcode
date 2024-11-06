// https://leetcode.com/problems/word-pattern/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  // split string by spaces
  s = s.trim().split(' ');
  
  // edge case
  if (pattern.length != s.length) return false;

  const map = new Map();

  // iterate through pattern through map
  for (let i = 0; i < pattern.length; i++) {
    if (map.get(pattern[i]) == undefined) {
      map.set(pattern[i], s[i]);
    } else {
      if (map.get(pattern[i]) != s[i]) {
        return false;
      }
    }
  }

  // check that there are no duplicates
  if ((new Set(map.values())).size != map.size) {
    return false;
  }

  return true;
};