// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Language: JavaScript
// Runtime: 320 MS
// Memory: 68.51 MB

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let cur = 0;
  let arr = {};

  for (let i = 0; i < s.length; i++) {
    if (arr[s[i]] != undefined) {
      i = arr[s[i]]+1;
      arr = {};

      if (cur > max) max = cur;
      cur = 0;
    }

    arr[s[i]] = i;
    cur++;
  }

  if (cur > max) max = cur;

  return max;
};