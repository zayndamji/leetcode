// https://leetcode.com/problems/permutations-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (nums.length == 1) return [[nums[0]]];

  const permutations = [];
  for (let i = 0; i < nums.length; i++) {
    const permuteRes = permuteUnique(nums.slice(0, i).concat(nums.slice(i+1)))
    for (let j = 0; j < permuteRes.length; j++) {
      permutations.push([nums[i]].concat(permuteRes[j]));
    }
  }
  
  return [...new Set(permutations.map(e => JSON.stringify(e)))].map(e => JSON.parse(e));
};