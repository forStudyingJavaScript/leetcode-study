/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let answer = Array.from({ length: n + 1 }, (_, index) => index);

  answer.map((v, i) => {
    let count = 0;
    while (v > 0) {
      v &= v - 1;
      count++;
    }
    answer[i] = count;
  });

  return answer;
};

// 41m
// 56.11MB
