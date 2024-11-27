/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// var reverseBits = function (n) {
//   let stringNumber = n.toString(2).padStart(32, '0');
//   let target = 1;
//   let answer = 0;

//   for (let i = 0; i < stringNumber.length; i++) {
//     console.log(stringNumber[i]);
//     if (+stringNumber[i] === 1) answer += target;
//     target *= 2;
//   }

//   return answer;
// };

// 최적화
// result는 맨 오른쪽이 1인지 아닌지 판단하고 계속 왼쪽으로 이동
// n은 한 번 비교하면 오른쪽으로 1비트씩 이동시키돼 >>>를 이용하여 0으로 채워줌.
// 맨 마지막 result를 >>> 0을 이용하여 0으로 채워줄 수 있음

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n = n >>> 1;
  }

  return result >>> 0;
};
