/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 여는 괄호는 스택에 추가하고, 닫는 괄호는 스택에서 제거
  const bracketPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (bracketPairs[char]) {
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
