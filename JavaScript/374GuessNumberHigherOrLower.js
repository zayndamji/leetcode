// https://leetcode.com/problems/guess-number-higher-or-lower/

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  return guessNumberRecur(1, n);
};

var guessNumberRecur = function(start, end) {
  const guessNum = Math.floor((end-start)/2)+start;
  const res = guess(guessNum)

  if (res == 0) return guessNum;

  if (res == 1) {
    return guessNumberRecur(guessNum+1, end);
  }

  if (res == -1) {
    return guessNumberRecur(start, guessNum-1);
  }
}