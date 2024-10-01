/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let answer = 0;
  let minPrice = Infinity;

  prices.forEach(currentPrice => {
    minPrice = Math.min(minPrice, currentPrice);
    const profit = currentPrice - minPrice;
    answer = Math.max(answer, profit);
  });

  return answer;
};

// Time taken: 31 m
