// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const left = [nums[0]];
  const right = [nums[nums.length-1]];
  const answer = [];

  for (let i = 1; i < nums.length; i++) {
    left.push(nums[i]*left[i-1]);
  }

  for (let i = nums.length-2; i >= 0; i--) {
    right.unshift(nums[i]*right[0]);
  }

  answer.push(right[1]);
  for (let i = 1; i < nums.length-1; i++) {
    answer.push(left[i-1] * right[i+1]);
  }
  answer.push(left[nums.length-2]);

  return answer;
};