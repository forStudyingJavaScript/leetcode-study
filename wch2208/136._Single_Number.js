/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map();
  nums.map(num => {
    if (map.get(num) === undefined) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  });

  for ([num, val] of map) {
    if (val === 1) return num;
  }
};

// time: 10m 41s
// memory: 56.87MB
