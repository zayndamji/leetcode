// https://leetcode.com/problems/counting-bits/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  return Array.from(Array(n+1).keys()).map(e => {
    return Array.from(e.toString(2)).filter(x => x==1).length;
  });
};