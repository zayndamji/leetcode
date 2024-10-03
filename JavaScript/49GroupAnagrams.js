// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const strMap = new Map();

  for (let i = 0; i < strs.length; i++) {
    const key = Array.from(strs[i]).sort().join();
    const value = strMap.get(key);
    if (value == undefined) {
      strMap.set(key, [strs[i]]);
    } else {
      strMap.set(key, value.concat([strs[i]]));
    }
  }

  return Array.from(strMap.values());
};