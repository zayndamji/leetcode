// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort((a, b) => a - b);
  
  let i = 0;
  for (; i < nums.length-1; i+=2) {
    if (nums[i] != nums[i+1]) {
      return nums[i];
    }
  }

  return nums[i];
};