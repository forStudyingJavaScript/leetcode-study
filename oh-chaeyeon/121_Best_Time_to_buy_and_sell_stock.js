/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minValue = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minValue) {
      minValue = prices[i];
    } else {
      const profit = prices[i] - minValue;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
};
