// 메서드를 써서 문자열로 다루는 방법
// /**
//  * @param {number} n - a positive integer
//  * @return {number} - a positive integer
//  */
// var reverseBits = function (n) {
//   // 32비트 이진수 문자열로 변환, 32비트 유지 필요
//   const binaryString = n.toString(2).padStart(32, "0");
//   // console.log(binaryString)
//   // 00000010100101000001111010011100

//   // 문자열을 배열로 바꾸고 뒤집은 후 다시 문자열로 합치기
//   const reversedBinaryString = binaryString.split("").reverse().join("");
//   // console.log(reversedBinaryString)
//   // 00111001011110000010100101000000

//   // 이진수 문자열을 정수로 변환
//   return parseInt(reversedBinaryString, 2);
// };

// 접근법
// 비트 조작을 통해 32비트 이진수 n을 직접 뒤집고,
// >>> 0 연산을 사용하여 부호 없는 32비트 정수로 변환한 후, return하면
// 자바스크립트의 기본 숫자 출력 형식에 따라 10진수로 반환된다.

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0; // 결과를 저장할 변수

  // 32비트 반복
  for (let i = 0; i < 32; i++) {
    // 현재 가장 오른쪽 비트를 가져오기
    let bit = n & 1;

    // 결과의 비트를 왼쪽으로 시프트하고 가져온 비트를 더하기
    result = (result << 1) | bit;

    // 입력값 n을 오른쪽으로 1비트 시프트
    n = n >> 1;
  }

  // 부호 없는 32비트 정수로 변환하여 반환
  return result >>> 0;
};

// time: 49m
// memory: 50.61MB
