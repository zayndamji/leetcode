// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) return false;

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!sMap.get(s[i])) {
      sMap.set(s[i], 1);
    } else {
      sMap.set(s[i], sMap.get(s[i])+1);
    }

    if (!tMap.get(t[i])) {
      tMap.set(t[i], 1);
    } else {
      tMap.set(t[i], tMap.get(t[i])+1);
    }
  }

  for (const [key, value] of sMap.entries()) {
    if (tMap.get(key) != value) {
      return false;
    }
  }

  return true;
};