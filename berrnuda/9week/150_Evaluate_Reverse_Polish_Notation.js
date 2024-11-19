/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (["+", "-", "*", "/"].includes(tokens[i])) {
      const second = stack.pop();
      const first = stack.pop();

      const result = eval(`${first} ${tokens[i]} ${second}`);
      stack.push(Math.trunc(result));
    } else {
      stack.push(Number(tokens[i]));
    }
  }

  return stack[0];
};
