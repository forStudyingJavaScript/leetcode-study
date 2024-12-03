var DetectSquares = function () {
  // 점들을 저장할 Map 초기화
  this.points = new Map();
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  const [x, y] = point;

  // y좌표가 없으면 새 Map 생성
  if (!this.points.has(y)) {
    this.points.set(y, new Map());
  }

  const row = this.points.get(y);
  // x좌표의 점 개수 증가
  row.set(x, (row.get(x) || 0) + 1);
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
  const [x, y] = point;
  let result = 0;

  // 쿼리 점의 y좌표에 점이 없으면 0 반환
  if (!this.points.has(y)) return 0;

  // 모든 y좌표에 대해
  for (const [y2, row] of this.points.entries()) {
    // 같은 y좌표는 건너뜀
    if (y2 === y) continue;

    // 정사각형의 높이
    const height = Math.abs(y2 - y);

    // x좌표에서 왼쪽과 오른쪽으로 height만큼 떨어진 점 찾기
    const count1 = row.get(x) || 0; // 같은 x좌표
    const count2 = row.get(x + height) || 0; // 오른쪽
    const count3 = row.get(x - height) || 0; // 왼쪽

    // 쿼리 점의 y좌표에서 해당하는 x좌표들의 점 개수
    const currRow = this.points.get(y);
    const count4 = currRow.get(x + height) || 0;
    const count5 = currRow.get(x - height) || 0;

    // 오른쪽과 왼쪽으로 형성되는 정사각형의 수를 더함
    result += count1 * count2 * count4; // 오른쪽
    result += count1 * count3 * count5; // 왼쪽
  }

  return result;
};

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
