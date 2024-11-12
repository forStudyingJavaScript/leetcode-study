/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  // 인덱스와 거리 정보를 가진 배열 생성
  const distance = points.map(([x, y], index) => ({
    index: index,
    distance: x * x + y * y,
  }));
  // console.log(distance)
  // [ { index: 0, distance: 10 }, { index: 1, distance: 8 } ]

  // distnace 작은 순서(오름차순)로 정렬
  distance.sort((a, b) => a.distance - b.distance);
  // console.log(distance)
  // [ { index: 1, distance: 8 }, { index: 0, distance: 10 } ]

  // k번째까지 자른 뒤 points에 해당 인덱스 값 접근해서 반환하기
  const answer = distance.slice(0, k).map(item => points[item.index]);
  return answer;
};

// time: 48m
// memory: 64.38MB
