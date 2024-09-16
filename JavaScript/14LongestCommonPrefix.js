// https://leetcode.com/problems/longest-common-prefix/
// Language: JavaScript

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let str = strs[0];

  for (let i = 0; i < strs.length; i++) {
    let j = 0;
    for (; j < Math.min(strs[i].length, str.length); j++) {
      if (strs[i][j] != str[j]) break;
    }
    
    str = str.substring(0, j);
  }

  return str;
};