/**
 * https://leetcode.com/problems/valid-parentheses/
 * 11m
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 스택으로 s의 값들을 push, pop 하며 검사
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else if (stack.length < 1) {
      return false;
    } else {
      const last = stack.pop();
      if (last === "(" && s[i] !== ")") return false;
      if (last === "[" && s[i] !== "]") return false;
      if (last === "{" && s[i] !== "}") return false;
    }
  }

  return stack.length < 1;
};
