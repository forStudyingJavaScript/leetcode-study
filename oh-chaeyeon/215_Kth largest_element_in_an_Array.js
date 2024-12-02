/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const maxHeap = new MaxPriorityQueue();

  for (const num of nums) {
    maxHeap.enqueue(num);
  }

  for (let i = 0; i < k - 1; i++) {
    maxHeap.dequeue();
  }
  return maxHeap.front().element;
};

// Time taken : 16m 50s
// Runtime : 148ms
// Memory : 77.60MB

//----------------------------------------------------

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const offset = 10000;
  const count = new Array(20001).fill(0);

  for (let num of nums) {
    count[num + offset]++;
  }

  let total = 0;
  for (let i = count.length - 1; i >= 0; i--) {
    total += count[i];
    if (total >= k) return i - offset;
  }
};

// Runtime : 5ms
// Memory : 58.40MB
