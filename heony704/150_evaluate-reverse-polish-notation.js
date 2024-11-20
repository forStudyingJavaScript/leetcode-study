/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * 40m
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const numStack = [];

  for (const token of tokens) {
    if (Number.isInteger(Number(token))) {
      numStack.push(Number(token));
    } else {
      const second = numStack.pop();
      const first = numStack.pop();

      if (token === "+") numStack.push(first + second);
      if (token === "-") numStack.push(first - second);
      if (token === "*") numStack.push(first * second);
      if (token === "/") numStack.push(Math.trunc(first / second));
    }
  }

  return numStack[0];
};
