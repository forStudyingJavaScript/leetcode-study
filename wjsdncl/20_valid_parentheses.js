/**
 * 22m41s
 *
 * 시간 복잡도: O(n)
 *
 * 맵을 사용해서 괄호의 짝을 저장하고 스택을 사용해서 괄호의 짝이 맞는지 확인하는 방법으로 풀었습니다.
 *
 * 스택을 사용해서 여는 괄호를 저장하고 닫는 괄호를 만나면 스택에서 가장 최근의 여는 괄호를 꺼내서 짝이 맞는지 확인합니다.
 * 짝이 맞지 않으면 false를 반환합니다.
 * 모든 괄호를 확인한 후 스택이 비어 있으면 true를 반환합니다.
 * 스택이 비어 있지 않으면 false를 반환합니다.
 */
var isValid = function (s) {
  const stack = [];
  // 괄호의 짝을 저장한 맵
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    // 닫는 괄호인 경우
    if (map[char]) {
      // 스택에서 가장 최근의 여는 괄호를 꺼냄
      const topElement = stack.length ? stack.pop() : "#";
      // 짝이 맞지 않으면 false 반환
      if (topElement !== map[char]) {
        return false;
      }
    } else {
      // 여는 괄호는 스택에 추가
      stack.push(char);
    }
  }

  // 스택이 비어 있어야 모든 괄호가 짝을 이룬 것
  return stack.length === 0;
};
