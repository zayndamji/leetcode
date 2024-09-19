// https://leetcode.com/problems/pascals-triangle/
// Language: JavaScript

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const pascalTriangle = [];

  for (let rowNum = 1; rowNum <= numRows; rowNum++) {
    const row = [1];

    for (let i = 1; i < rowNum-1; i++) {
      row.push(pascalTriangle[pascalTriangle.length-1][i-1]+pascalTriangle[pascalTriangle.length-1][i]);
    }

    if (rowNum > 1) {
      row.push(1);
    }

    pascalTriangle.push(row);
  }

  return pascalTriangle;
};