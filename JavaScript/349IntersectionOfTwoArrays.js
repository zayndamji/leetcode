// https://leetcode.com/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const arr = [];

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      arr.push(nums1[i]);
    }
  }

  return Array.from(new Set(arr));
};