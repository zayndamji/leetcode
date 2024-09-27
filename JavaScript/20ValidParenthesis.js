// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
      stack.push(s[i]);
    } else {
      if (stack.length == 0)
        return false;

      const last = stack.pop();
      if ((last == '(' && s[i] != ')') ||
          (last == '{' && s[i] != '}') ||
          (last == '[' && s[i] != ']')) {
        return false;
      }
    }
  }

  if (stack.length > 0)
    return false;

  return true;
};