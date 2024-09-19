// https://leetcode.com/problems/excel-sheet-column-number/
// Language: JavaScript

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let sum = 0;

  for (let i = 1; i <= columnTitle.length; i++) {
    sum += (columnTitle.charCodeAt(columnTitle.length-i)-64) * Math.pow(26, i-1);
  }

  return sum;
};