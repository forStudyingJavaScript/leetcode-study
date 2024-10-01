/**
 * 15m 31s
 * 한 번의 매수와 한 번의 매도로 얻을 수 있는 최대 수익
 * 수익을 얻을 수 없다면 0을 return
 *
 * @param {number[]} prices - i번째 날의 가격[i]이 주어진 주식의 가격들의 배열
 * @return {number}
 */
const maxProfit = (prices) => {
  // minPrice를 업데이트해주고,
  // minPrice에 따른 profit의 최댓값을 다시 업데이트
  let maximum = 0;
  let minPrice = prices[0];
  for (price of prices) {
    if (price < minPrice) {
      minPrice = price;
    }
    maximum = Math.max(price - minPrice, maximum);
  }
  return maximum;
};

// Runtime:  61 ms  Beats 96.30%
// Memory:   60.24MB Beats 11.54%
