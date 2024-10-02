/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxCurrent = 0;
  let maxSoFar = 0;

  for (let i = 1; i < prices.length; i++) {
    maxCurrent = Math.max(0, maxCurrent + prices[i] - prices[i - 1]);
    maxSoFar = Math.max(maxSoFar, maxCurrent);
  }

  return maxSoFar;
};
