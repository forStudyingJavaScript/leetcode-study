/**
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function (k, nums) {
  const minHeap = [];

  const add = (val) => {
    minHeap.push(val);
    minHeap.sort((a, b) => a - b);

    if (minHeap.length > k) {
      minHeap.shift();
    }

    return minHeap[0];
  };

  nums.forEach((num) => add(num));

  return {
    add,
  };
};
