/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  let num = String(BigInt(digits.join('')) + BigInt(1));
  let arr = num.split('').map((s) => +s);

  return arr;
}

// BigInt 써보고 안되면 배열로 계산하려 했는데 넘어가지네요ㅎㅎ
// 배열 -> 문자 -> 숫자 -> 문자 -> 문자 배열 -> 숫자 배열로 타입이 계속 바뀌어서 타입 에러 잡느라 애먹었습니다,,
