/**
 * 29m21s
 *
 * 시간 복잡도: O(log n)
 *
 * 어떻게 풀어야 할지 감이 안 잡혀서 챗지피티에게 도움을 받았습니다
 *
 * 이 문제도 토끼와 거북이 알고리즘을 사용하여 풀 수 있습니다.
 *
 * slow는 n으로 초기화하고 fast는 n의 다음 수로 초기화합니다.
 * slow와 fast가 만나지 않을 때까지 반복합니다.
 * 만약 fast가 1이면 true를 반환합니다.
 * 그렇지 않으면 false를 반환합니다.
 */
var isHappy = function (n) {
  // 각 자리의 제곱합을 계산하는 함수
  const getNext = (num) => {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  };

  let slow = n;
  let fast = getNext(n);

  // 사이클이 감지될 때까지 반복
  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }

  // fast가 1이면 true, 그렇지 않으면 false
  return fast === 1;
};
