// https://leetcode.com/problems/minimum-time-difference/
// Language: JavaScript

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  const minutePoints = [];

  for (let i = 0; i < timePoints.length; i++) {
    minutePoints[i] = parseInt(timePoints[i].substring(0, 2))*60 + parseInt(timePoints[i].substring(3));
  }

  minutePoints.sort((a, b) => a - b);

  let min = minutePoints[0] + 1440 - minutePoints[minutePoints.length-1];
  for (let i = 0; i < minutePoints.length-1; i++) {
    if ((minutePoints[i+1] - minutePoints[i]) < min) {
      min = minutePoints[i+1] - minutePoints[i];
    }
  }
  return min;
};