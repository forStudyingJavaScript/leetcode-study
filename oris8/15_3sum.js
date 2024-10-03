/**
 *
 * 정수 배열 nums에서 세 num 합이 0 이 되는 조합을 return
 * 한 요소는 한 번만 사용가능하고 중복된 숫자가 있을 수 있다. 하지만 중복된 세트가 포함되서는 안된다.
 *
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 *
 * @param {number[]} nums
 * @return {number[][]} [nums[i], nums[j], nums[k]][]
 */
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // sort 했으므로 index를 사용해 중복된 숫자 건너뛰기
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

// Runtime:  151 ms  Beats 78.51%
// Memory:   65.01MB Beats 68.03%
