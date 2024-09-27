// https://leetcode.com/problems/uncommon-words-from-two-sentences/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  const s1a = s1.split(' ');
  const s2a = s2.split(' ');
  const common = [];

  for (let i = 0; i < s1a.length; i++) {
    if (s2a.includes(s1a[i])) {
      common.push(s1a[i]);
    }

    else if (s1a.slice(i+1).includes(s1a[i])) {
      common.push(s1a[i]);
    }
  }

  for (let i = 0; i < s2a.length; i++) {
    if (s2a.slice(i+1).includes(s2a[i])) {
      common.push(s2a[i]);
    }
  }

  for (let i = 0; i < common.length; i++) {
    while (s2a.includes(common[i])) {
      s2a.splice(s2a.indexOf(common[i]), 1);
    }

    while (s1a.includes(common[i])) {
      s1a.splice(s1a.indexOf(common[i]), 1);
    }
  }

  return s1a.concat(s2a);
};