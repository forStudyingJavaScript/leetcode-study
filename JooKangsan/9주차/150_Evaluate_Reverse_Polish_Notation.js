/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  while (tokens.length > 1) {
    for (let i = 0; i < tokens.length; i++) {
      if (["+", "-", "*", "/"].includes(tokens[i])) {
        const num1 = Number(tokens[i - 2]);
        const num2 = Number(tokens[i - 1]);
        const operator = tokens[i];
        let result;

        switch (operator) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            result =
              num1 / num2 > 0
                ? Math.floor(num1 / num2)
                : Math.ceil(num1 / num2);
            break;
        }

        tokens.splice(i - 2, 3, result.toString());
        break;
      }
    }
  }
  return Number(tokens[0]);
};
