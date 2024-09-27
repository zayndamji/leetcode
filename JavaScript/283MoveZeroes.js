// https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      let j = i+1;
      while (j < nums.length) {
        if (nums[j] != 0) break;
        j++;
      }

      if (j < nums.length) {
        nums[i] = nums[j];
        nums[j] = 0;
      } else {
        break;
      }
    }
  }
};