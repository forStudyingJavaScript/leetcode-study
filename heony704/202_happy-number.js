/**
 * https://leetcode.com/problems/happy-number/
 * 16m
 *
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 숫자가 다시 반복되는지 확인하기 위해 Set으로 숫자 저장
  const history = new Set([n]);
  let target = n;

  while (true) {
    const arr = target.toString().split("");

    // 각 자리 숫자를 제곱한 값들의 합 구하기
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i]) * Number(arr[i]);
    }

    // 합이 1이라면 Happy Number
    if (sum === 1) {
      return true;
    }

    // 숫자가 반복되는 무한 루프라면 Unhappy Number
    if (history.has(sum)) {
      return false;
    }

    history.add(sum);
    target = sum;
  }
};
