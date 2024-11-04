// https://leetcode.com/problems/excel-sheet-column-title/
// Time Spent: 30 minutes

/*
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
*/

/*
Example 1:

Input: columnNumber = 1
Output: "A"

Example 2:

Input: columnNumber = 28
Output: "AB"

Example 3:

Input: columnNumber = 701
Output: "ZY"
*/

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  let letterCount = 0;
  let prevCount = 0;
  for (let i = 1; i <= 7; i++) {
    if ((Math.pow(26, i) + prevCount) >= columnNumber) {
      letterCount = i;
      break;
    } else {
      prevCount += Math.pow(26, i);
    }
  }

  const codes = [];
  for (let curNum = letterCount-1; curNum >= 1; curNum--) {
    const subtractNum = Math.pow(26, curNum);
    let curCode = 0;
    while (columnNumber > subtractNum) {
      columnNumber -= subtractNum;
      curCode++;
    }
    codes.push(curCode);
  }

  for (let curNum = 0; curNum >= 0; curNum--) {
    const subtractNum = Math.pow(26, curNum);
    let curCode = 0;
    while (columnNumber >= subtractNum) {
      columnNumber -= subtractNum;
      curCode++;
    }
    codes.push(curCode);
  }

  for (let i = 1; i < codes.length; i++) {
    if (codes[i] == 0) {
      codes[i] = 26;
      codes[i-1] = codes[i-1]-1;
    }
  }

  return codes.map(e => String.fromCharCode(e+64)).join('');
};