// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//   const profitArray = [];

//   for (let i = 0; i <= prices.length; i++) {
//     for (let j = i; j <= prices.length; j++) {
//       if (j < prices.length) profitArray.push(prices[i] - prices[j]);
//     }
//   }

//   return Math.abs(profitArray.sort((a, b) => a - b)[0]);
// };

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0; // 최대 이익을 초기화
  let minPrice = Infinity; // 최저 가격을 매우 큰 값으로 초기화

  for (let i = 0; i < prices.length; i++) {
    // 현재 가격이 최저 가격보다 낮으면 업데이트
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      // 현재 가격에서 최저 가격을 빼서 이익 계산
      const profit = prices[i] - minPrice;
      // 최대 이익 업데이트
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit; // 최대 이익 반환
};
