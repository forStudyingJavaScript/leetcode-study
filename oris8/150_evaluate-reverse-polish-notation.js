/**
 *
 * 150 / Evaluate Reverse Polish Notation / Medium / 36m 44s
 *
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };

  const stack = [];

  for (const token of tokens) {
    if (operators?.[token]) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(operators[token](a, b));
    } else {
      stack.push(+token);
    }
  }

  return stack.pop();
};
