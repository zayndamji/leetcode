// https://leetcode.com/problems/climbing-stairs/
// Language: JavaScript

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let firstNum = 0;
  let secondNum = 1;

  for (let i = 1; i <= n; i++) {
    const temp = firstNum;
    firstNum = secondNum;
    secondNum = temp + firstNum;
  }

  return secondNum;
};