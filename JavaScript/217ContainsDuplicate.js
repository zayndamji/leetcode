// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) != undefined) {
      return true;
    }

    map.set(nums[i], 1)
  }

  return false;
};