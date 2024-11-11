/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  // 인접한 두 집을 털지 않으면서 최대로 많이 훔칠 수 있는 금액을 찾기
  // T(n) = max(n + T(n−2) , T(n−1))

  const cache = Array.from({ length: nums.length }, () => 0);

  cache[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (i === 1) {
      cache[1] = Math.max(nums[0], nums[1]);
    } else {
      cache[i] = Math.max(cache[i - 1], cache[i - 2] + nums[i]);
    }
  }

  return cache.pop();
};
