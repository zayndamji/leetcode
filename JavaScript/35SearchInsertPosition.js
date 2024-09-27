// https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  return binarySearch(nums, target, 0, nums.length-1);
};

var binarySearch = function(nums, target, startIndex, endIndex) {
  if (startIndex >= endIndex) {
    if (nums[startIndex] < target) {
      return startIndex+1;
    } else {
      return startIndex;
    }
  }

  const midIndex = Math.floor(startIndex + ((endIndex-startIndex) / 2));
  const midNum = nums[midIndex];

  if (midNum == target) {
    return midIndex;
  }

  if (midNum > target) {
    return binarySearch(nums, target, startIndex, midIndex-1);
  }

  return binarySearch(nums, target, midIndex+1, endIndex);
}