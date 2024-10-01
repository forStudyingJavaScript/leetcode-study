/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const { length } = prices;
  let minPrice = Math.max(...prices);
  let maxProfit = 0;

  for (let i = 0; i < length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      let profit = prices[i] - minPrice;
      maxProfit = profit > maxProfit ? profit : maxProfit;
    }
  }
  return maxProfit;
};
