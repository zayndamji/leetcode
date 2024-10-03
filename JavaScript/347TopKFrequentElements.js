// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const numFrequency = new Map();

  for (let i = 0; i < nums.length; i++) {
    const value = numFrequency.get(nums[i]);
    if (value == undefined) {
      numFrequency.set(nums[i], 1);
    } else {
      numFrequency.set(nums[i], value+1);
    }
  }

  return Array.from(numFrequency.entries()).sort((a, b) => b[1] - a[1]).slice(0, k).map(e => e[0]);
};