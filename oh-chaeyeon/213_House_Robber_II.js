/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;

  if (n === 0) return 0;
  if (n === 1) return nums[0];

  const FindMoney = (houses) => {
    let one = 0,
      two = 0;
    for (let money of houses) {
      const temp = one;
      one = Math.max(one, two + money);
      two = temp;
    }
    return one;
  };

  return Math.max(FindMoney(nums.slice(0, n - 1)), FindMoney(nums.slice(1)));
};

// Time taken : 20m 31s
// Runtime : 0ms
// Memory : 48.34MB
