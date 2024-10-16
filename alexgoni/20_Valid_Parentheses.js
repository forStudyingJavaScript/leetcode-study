/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i]);
      continue;
    }

    if (s[i] === "(" || s[i] === "{" || s[i] === "[") stack.push(s[i]);
    else if (s[i] === ")") {
      if (stack[stack.length - 1] === "(") stack.pop();
      else stack.push(s[i]);
    } else if (s[i] === "}") {
      if (stack[stack.length - 1] === "{") stack.pop();
      else stack.push(s[i]);
    } else if (s[i] === "]") {
      if (stack[stack.length - 1] === "[") stack.pop();
      else stack.push(s[i]);
    }
  }

  return stack.length === 0;
};
