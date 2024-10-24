/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let sI = 0;
  let tI = 0;

  while (sI < s.length) {
    while (s[sI] != t[tI] && tI < t.length) {
      tI++;
    }

    if (tI == t.length) return false;

    sI++;
    tI++;
  }

  return true;
};