/**
 * 51m18s 소요
 *
 * 시간복잡도: O(n) (n: 점의 개수)
 *
 * 주어진 점들로부터 정사각형을 만들 수 있는 경우의 수를 구하는 문제입니다.
 *
 * 어떻게 풀어야 할지 감이 전혀 안와서 풀이랑 GPT의 도움을 받았습니다.
 *
 * 점들의 빈도를 저장하기 위한 맵을 생성합니다.
 * 새로운 점을 추가할 때마다 빈도를 증가시킵니다.
 * 정사각형을 만들 수 있는 경우의 수를 구합니다.
 * 대각선의 조건을 만족하는 점들을 찾습니다.
 * 대각선 점을 기준으로 나머지 두 점의 빈도를 곱하여 더합니다.
 * 결과를 반환합니다.
 */
var DetectSquares = function () {
  // 점들의 빈도를 저장하기 위한 맵
  this.points = new Map();
};

DetectSquares.prototype.add = function (point) {
  const [x, y] = point;
  const key = `${x},${y}`;
  if (!this.points.has(key)) {
    this.points.set(key, 0);
  }
  this.points.set(key, this.points.get(key) + 1);
};

DetectSquares.prototype.count = function (point) {
  const [px, py] = point;
  let count = 0;

  // 모든 점을 탐색하며 정사각형의 가능성을 확인
  for (let [key, freq] of this.points) {
    const [x, y] = key.split(",").map(Number);

    // x나 y가 같으면 대각선이 될 수 없으므로 스킵
    if (x === px || y === py) continue;

    // 대각선의 조건: 두 점 간의 x, y 차이가 같아야 함
    if (Math.abs(x - px) === Math.abs(y - py)) {
      // 대각선 점을 기준으로 나머지 두 점의 빈도를 곱함
      const point1 = `${x},${py}`;
      const point2 = `${px},${y}`;
      count += (this.points.get(point1) || 0) * (this.points.get(point2) || 0) * freq;
    }
  }
  return count;
};
