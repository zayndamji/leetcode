// https://leetcode.com/problems/single-number/

/*
Submission 1:
Time Complexity O(N^2)
Space Complexity O(1)
*/

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

/*
Submission 2:
Time Complexity O(N)
Space Complexity O(N)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numMap.get(nums[i]) != undefined) {
      numMap.set(nums[i], numMap.get(nums[i])+1);
    } else {
      numMap.set(nums[i], 1);
    }
  }

  const numMapEntries = Array.from(numMap.entries());
  for (let i = 0; i < numMapEntries.length; i++) {
    if (numMapEntries[i][1] == 1) {
      return numMapEntries[i][0];
    }
  }
};