// https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) ? map.get(nums[i])+1 : 1);
    if (map.get(nums[i]) > nums.length/2) return nums[i];
  }
};