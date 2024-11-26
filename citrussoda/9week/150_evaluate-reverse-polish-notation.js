/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let op = new Set(['+', '-', '*', '/']);

  for (let i of tokens) {
    if (!op.has(i)) stack.push(+i);
    if (op.has(i)) {
      let a = stack.pop();
      let b = stack.pop();
      if (i === '+') stack.push(a + b);
      if (i === '-') stack.push(b - a);
      if (i === '*') stack.push(a * b);
      if (i === '/') stack.push(parseInt(b / a));
    }
  }

  return stack[0];
};
