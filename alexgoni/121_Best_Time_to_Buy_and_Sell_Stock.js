// 😢

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Number.POSITIVE_INFINITY;
  let maxProfit = 0;

  for (const price of prices) {
    if (minPrice > price) minPrice = price;

    const profit = price - minPrice;
    if (profit > maxProfit) maxProfit = profit;
  }

  return maxProfit;
};
