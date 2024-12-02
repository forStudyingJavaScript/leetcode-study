// /**
//  * @param {string[]} tokens
//  * @return {number}
//  */
// var evalRPN = function(tokens) {
//     let i = 0;

//     while(tokens.length > 1) {
//         if(isNaN(tokens[i])) {
//             let temp;

//             if(tokens[i] === "+") temp = Number(tokens[i-2]) + Number(tokens[i-1]);
//             if(tokens[i] === "-") temp = Number(tokens[i-2]) - Number(tokens[i-1]);
//             if(tokens[i] === "*") temp = Number(tokens[i-2]) * Number(tokens[i-1]);
//             if(tokens[i] === "/") temp = Math.trunc(Number(tokens[i-2]) / Number(tokens[i-1]));

//             tokens.splice(i-2, 3, temp);
//             i = 0;
//         }

//         i++;
//     }

//     return +tokens[0];
// };

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (let token of tokens) {
    if (!isNaN(token)) stack.push(Number(token));
    else {
      const b = stack.pop();
      const a = stack.pop();

      if (token === "+") stack.push(a + b);
      if (token === "-") stack.push(a - b);
      if (token === "*") stack.push(a * b);
      if (token === "/") stack.push(Math.trunc(a / b));
    }
  }

  return stack.pop();
};
