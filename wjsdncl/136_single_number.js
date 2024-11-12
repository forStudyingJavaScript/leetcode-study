/**
 * 12m 21s 소요
 *
 * 시간복잡도: O(n)
 *
 * 1. XOR 연산을 이용한다.
 * 2. XOR 연산은 두 값이 같으면 0, 다르면 1을 반환한다.
 * 3. 배열의 모든 요소를 XOR 연산하면 한번만 나오는 요소만 남는다.
 * 4. 남은 요소를 반환한다.
 */
var singleNumber = function (nums) {
  let result = 0;

  for (let num of nums) {
    result ^= num;
  }

  return result;
};
