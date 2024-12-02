/**
 * @param {number[]} nums
 * @return {number}
 */

// 최적값이 너무 어려워서 GPT와 문제 풀이 사이트의 힘을 빌려봤어요...

var rob = function (nums) {
  // 여기 생각 못 하고 있었는데 나중에 알아서 급하게 추가...
  if (nums.length === 1) return nums[0];

  const robLinear = (houses) => {
    let prev2 = 0;
    let prev1 = 0;
    for (let money of houses) {
      const temp = Math.max(prev1, prev2 + money);
      prev2 = prev1;
      prev1 = temp;
    }
    return prev1;
  };

  return Math.max(
    robLinear(nums.slice(1)),
    robLinear(nums.slice(0, nums.length - 1))
  );
};
