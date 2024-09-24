/*
/ 16분 소요
/
/ 시간복잡도: O(n)
/
/ 최소값과 최대 이익을 저장해두고 배열을 순회하며 최소값과 최대 이익을 갱신합니다.
/ 마지막 최대 이익을 반환합니다.
*/
var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  // 배열 순회 (O(n))
  for (let i = 1; i < prices.length; i++) {
    // 최소값 갱신
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    // 최대 이익 갱신
    else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};
