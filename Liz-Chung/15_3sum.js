/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = [];
  
  // Sort the array to use the two-pointer technique
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
      // Skip the same element to avoid duplicates
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
          const sum = nums[i] + nums[left] + nums[right];

          if (sum === 0) {
              result.push([nums[i], nums[left], nums[right]]);
              
              // Move the left and right pointers to the next unique elements
              while (left < right && nums[left] === nums[left + 1]) left++;
              while (left < right && nums[right] === nums[right - 1]) right--;

              // Move pointers after finding a valid triplet
              left++;
              right--;
          } else if (sum < 0) left++; // Move the left pointer to the right to increase the sum
            else right--; // Move the right pointer to the left to decrease the sum
      }
  }

  return result;
};

// Runtime:  156 ms  Beats 65.75%
// Memory:   64.24 MB Beats 92.81%
