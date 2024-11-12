/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k;
  this.h = [];

  // populate the array
  const limit = Math.min(this.k, nums.length);
  for(let i = 0; i < limit; i++) {
      this.h.push(nums[i]);
  }
  this.heapifyBottomUp();
  // add remaining elements
  for(let i = k; i < nums.length; i++) {
      this.add(nums[i]);
  }
};

KthLargest.prototype.heapifyBottomUp = function() {
  const firstLeafAt = Math.floor(this.h.length/2);
  for(let i = firstLeafAt - 1; i >= 0; i--) {
      this.heapify(i);
  }
}

KthLargest.prototype.heapify = function(i) {
  const l = 2*i + 1;
  const r = 2*i + 2;

  let min = i;

  if(l < this.h.length && this.h[l] < this.h[min]) {
      min = l
  }

  if(r < this.h.length && this.h[r] < this.h[min]) {
      min = r;
  }

  if(min != i) {
      [this.h[i], this.h[min]] = [this.h[min], this.h[i]];
      this.heapify(min)
  }
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
  if(this.h.length < this.k) { // heap is not full
      this.h.push(val);
      this.heapifyBottomUp();
  } else {
      if(val > this.h[0]) {
          this.h[0] = val;
          this.heapify(0)
      }
  }
  return this.h[0];
};