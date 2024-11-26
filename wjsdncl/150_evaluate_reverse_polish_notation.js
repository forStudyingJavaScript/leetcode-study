/**
 * 19m26s 소요
 *
 * 시간복잡도 : O(n)
 *
 * 배열로 주어진 reverse polish notation을 계산하는 문제입니다.
 * reverse polish notation를 보고 어려운 줄 알았는데 그냥 순서대로 계산만 하면 되는 문제였습니다.
 *
 * 숫자인 경우 스택에 push하고, 연산자인 경우 스택에서 두 숫자를 pop하여 연산한 결과를 다시 스택에 push합니다.
 * 최종적으로 스택에 남아 있는 값을 반환합니다.
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (let token of tokens) {
    if (!isNaN(token)) {
      // 숫자인 경우 스택에 push
      stack.push(Number(token));
    } else {
      // 연산자인 경우 스택에서 두 숫자를 pop
      const b = stack.pop();
      const a = stack.pop();

      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(parseInt(a / b));
          break;
      }
    }
  }

  // 스택에 남아 있는 최종 결과 반환
  return stack.pop();
};
