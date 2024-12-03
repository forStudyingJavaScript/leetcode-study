// 😢

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new MaxBinaryHeap();

  for (const num of nums) {
    heap.insert(num);
  }

  for (let i = 0; i < k; i++) {
    const extractedValue = heap.extractMax();
    if (i === k - 1) return extractedValue;
  }
};

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.#bubbleUp();

    return this.values;
  }

  extractMax() {
    const extractedValue = this.values[0];
    const poppedValue = this.values.pop();

    if (this.values.length === 0) return extractedValue;

    this.values[0] = poppedValue;
    this.#sinkDown();

    return extractedValue;
  }

  #bubbleUp() {
    let currentIndex = this.values.length - 1;
    const currentValue = this.values[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      const parentValue = this.values[parentIndex];

      if (parentValue >= currentValue) break;

      this.values[parentIndex] = currentValue;
      this.values[currentIndex] = parentValue;

      currentIndex = parentIndex;
    }
  }

  #sinkDown() {
    let currentIndex = 0;
    const currentValue = this.values[currentIndex];
    const length = this.values.length;

    while (true) {
      let leftChildIndex = currentIndex * 2 + 1;
      let rightChildIndex = currentIndex * 2 + 2;
      let leftChildValue, rightChildValue;
      let swapWith = null;

      if (leftChildIndex < length) {
        leftChildValue = this.values[leftChildIndex];
        if (leftChildValue > currentValue) swapWith = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChildValue = this.values[rightChildIndex];
        if (
          (!swapWith && rightChildValue > currentValue) ||
          (swapWith && rightChildValue > leftChildValue)
        ) {
          swapWith = rightChildIndex;
        }
      }

      if (!swapWith) break;

      this.values[currentIndex] = this.values[swapWith];
      this.values[swapWith] = currentValue;

      currentIndex = swapWith;
    }
  }
}
