// https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length == 1) return [[nums[0]]];

  const permutations = [];
  for (let i = 0; i < nums.length; i++) {
    const permuteRes = permute(nums.slice(0, i).concat(nums.slice(i+1)))
    for (let j = 0; j < permuteRes.length; j++) {
      permutations.push([nums[i]].concat(permuteRes[j]));
    }
  }
  
  return permutations;
};