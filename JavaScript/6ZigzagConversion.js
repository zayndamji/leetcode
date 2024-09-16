// https://leetcode.com/problems/zigzag-conversion/
// Language: JavaScript

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows == 1) return s;

  let str = "";

  for (let i = 0; i < s.length; ) {
    str += s[i];
    i += (numRows-1)*2;
  }

  for (let rowNum = 1; rowNum < numRows-1; rowNum++) {
    for (let i = rowNum; i < s.length; ) {
      str += s[i];
      i += ((numRows-rowNum)-1)*2;
      if (i < s.length) {
        str += s[i];
        i += rowNum*2;
      }
    }
  }

  for (let i = numRows-1; i < s.length; ) {
    str += s[i];
    i += (numRows-1)*2;
  }

  return str;
};