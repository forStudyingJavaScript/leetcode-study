var DetectSquares = function () {
  this.pointCount = new Map();
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  const [x, y] = point;
  const key = `${x},${y}`;
  this.pointCount.set(key, (this.pointCount.get(key) || 0) + 1);
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
  const [x, y] = point;
  let totalSquares = 0;

  for (const key of this.pointCount.keys()) {
    const [px, py] = key.split(",").map(Number);

    if (Math.abs(px - x) !== Math.abs(py - y) || px === x || py === y) continue;

    const corner1 = `${px},${y}`;
    const corner2 = `${x},${py}`;

    const countCurrent = this.pointCount.get(key) || 0;
    const countCorner1 = this.pointCount.get(corner1) || 0;
    const countCorner2 = this.pointCount.get(corner2) || 0;

    totalSquares += countCurrent * countCorner1 * countCorner2;
  }

  return totalSquares;
};

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */

// Time taken : 57m 48s
// Runtime : 336ms
// Memory : 62.48MB
