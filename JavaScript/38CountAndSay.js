// https://leetcode.com/problems/count-and-say/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n == 1) return "1";

  let rle = countAndSay(n-1);
  let str = "", iter = 0;
  for (let i = 0; i < rle.length; i++) {
    iter++;
    if (i == rle.length-1 || rle[i] != rle[i+1]) {
      str += "" + iter + rle[i];
      iter = 0;
    }
  }

  return str;
};