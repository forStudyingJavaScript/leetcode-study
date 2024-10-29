/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let rob1 = 0;
  let rob2 = 0;

  for (let i = 0; i < nums.length; i++) {
    let max = Math.max(rob1 + nums[i], rob2);
    rob1 = rob2;
    rob2 = max;
  }

  return rob2;
}

// 집이 하나도 없는 경우에는 0을 반환, 집이 하나뿐이면 그 집의 금액을 반환합니다.
// 두 rob 변수를 사용해 현재 집을 털지 않고 얻는 최대 금액과 털어서 얻는 최대 금액을 저장합니다.
// 각 집을 확인하며 털거나 털지 않는 두 경우를 비교하여 최대 금액을 반환합니다.
