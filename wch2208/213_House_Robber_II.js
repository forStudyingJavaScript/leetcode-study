/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 문제이해
  // 1. 인접한 집은 털 수 없는 경우, 최대로 많은 금액을 훔치면 얼마? (DP 계산)
  // 추가 조건: 집이 원형으로 배치되서 첫 집과 마지막 집이 인접하다.
  // 접근법
  // DP를 활용해서 최대값을 구하는 함수를 만든다. (1단계)
  // 추가 조건을 고려한 추가 로직을 작성. (2단계)
  // 2단계는 1단계 함수에 nums를 바꿔서 두 번 실행하고 비교한다.
  // 왜냐하면 첫번째 집을 턴 경우는 마지막 집을 제거하면 되고
  // 첫번째 집을 안 턴 경우는 첫번째 집을 제외하고 DP를 계산하면 된다.

  // 예외 처리: 집이 1개인 경우
  if (nums.length === 1) return nums[0];

  // dp로 최대값 구하는 함수
  const simpleRob = houses => {
    // 예외 처리: 집이 1개인 경우
    if (houses.length === 1) return houses[0];

    // dp 배열 생성
    let dp = new Array(houses.length);

    // 기저 조건
    dp[0] = houses[0];
    dp[1] = Math.max(houses[0], houses[1]);

    // for문으로 순회하면서 점화식 수행
    for (let i = 2; i < houses.length; i++) {
      dp[i] = Math.max(houses[i] + dp[i - 2], dp[i - 1]);
    }

    // 마지막 요소에 최대값이 담김
    return dp[dp.length - 1];
  };

  // 첫집 턴 경우, 안 턴 경우 중 큰 값
  return Math.max(
    simpleRob(nums.slice(0, nums.length - 1)),
    simpleRob(nums.slice(1))
  );
};

// time: 41m
// memory: 48.78MB
