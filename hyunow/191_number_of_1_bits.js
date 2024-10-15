/**
 * @param {number} n
 * @return {number}
 * toString(2) 2진수로 변환
 * split('') 배열로 변환
 * filter 1의 개수 추출
 */
var hammingWeight = function (n) {
  let binArr = n.toString(2).split("");
  let ans = binArr.filter((element) => "1" === element).length;
  return ans;
};
