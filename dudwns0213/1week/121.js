/**
 * @param {number[]} prices
 * @return {number}
 *
 * 문제 이해가 어려워서 이해에 시간이 많이 걸렸다...
 *
 * 최소 가격 / 최대 이익 2개의 변수를 생성
 * 이후, prices를 순차적으로 순회(for of)
 * 현재 가격이 min(최소 가격) 보다 낮을 시, min을 현재 price로 변경
 * 만약 아닐 시(현재 가격이 최소 가격보다 높다), 해당 price - 최소 가격 = 최대 이익으로 계산
 *
 * ex) 7 1 5 3 6 4
 * 7 -> min = 7 max = 0
 * 1 -> min = 1 max = 0
 *
 * 5 -> min = 1 max = 4
 * 3 ...
 * 6 -> min = 1 max = 5
 * 4 ...
 *
 * Math.max를 사용하는 이유
 *
 * 현재 이익(price - min) 과 최대 이익 (max) 중 더 큰 값을 선택해서 결과를 낼 수 있기 때문
 * max를 계속 업데이트 할 수 있으므로 사용해야 함
 *
 */
var maxProfit = function (prices) {
  let max = 0;
  let min = Infinity;

  for (price of prices) {
    if (price < min) {
      min = price;
    } else {
      max = Math.max(price - min, max);
    }
  }

  return max;
};
