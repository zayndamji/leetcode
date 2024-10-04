// https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length == 0) return 0;
  
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], true);
  }

  let max = 1;
  let cur = 1;
  const keys = Array.from(map.keys()).sort((a, b) => a - b);
  for (let i = 0; i < keys.length-1; i++) {
    if (keys[i]+1 == keys[i+1]) {
      cur++;
    } else {
      if (cur > max) max = cur;
      cur = 1;
    }
  }

  if (cur > max) max = cur;

  return max;
};