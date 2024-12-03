var DetectSquares = function () {
  this.ptsCount = new Map();
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  const key = `${point[0]}/${point[1]}`;
  this.ptsCount.set(key, (this.ptsCount.get(key) || 0) + 1);
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
  const [qx, qy] = point;
  let result = 0;

  for (const key of this.ptsCount.keys()) {
    const [px, py] = key.split("/").map(Number);

    if (Math.abs(px - qx) === Math.abs(py - qy) && px !== qx && py !== qy) {
      const key1 = `${px}/${qy}`;
      const key2 = `${qx}/${py}`;
      result +=
        (this.ptsCount.get(key) || 0) *
        (this.ptsCount.get(key1) || 0) *
        (this.ptsCount.get(key2) || 0);
    }
  }

  return result;
};

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
