/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let pair = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  let stack = [];

  for (let char of s) {
    if (stack.length !== 0 && stack[stack.length - 1] === pair[char]) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
