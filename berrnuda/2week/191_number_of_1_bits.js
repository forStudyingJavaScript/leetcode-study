/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight1 = function (n) {
  return n.toString(2).split("1").length - 1;
  // n = 12 (1100) [1,1,00]
  // n = 11 (1011) [1,0,1,1]
};

// Runtime:  57 ms    Beats 57.79%
// Memory:   49.50 MB Beats 43.02%
// 27s

var hammingWeight2 = function (n) {
  let i = 0;
  for (; n != 0; i++) {
    // n이 0이 될때까지 ( 1이 없을때까지 )
    n &= n - 1; // n의 가장 오른쪽 1을 제거 후 and 연산으로 1만 남김
    // n = 12 (1100), n - 1 = 11 (1011) n &= n - 1 = 1000
  }
  return i;
};

// Runtime:  43 ms    Beats 98.38%
// Memory:   49.26 MB Beats 64.39%
// 13m
