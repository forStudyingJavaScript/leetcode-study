/**
 * 31m11s 소요
 *
 * 시간 복잡도 O(n^2)
 *
 * 어려워서 찾아봤습니다. 풀이를 보니까 쉬운 문제인데 생각을 못했습니다.
 *
 * 1. 행과 열을 바꿉니다. (i, j) -> (j, i)
 * 2. 열을 뒤집습니다.
 * 3. 행렬을 반환합니다.
 */
var rotate = function (matrix) {
  const n = matrix.length;

  // 행과 열을 바꿉니다. (i, j) -> (j, i) (O(n^2))
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // 열을 뒤집습니다. (O(n^2))
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
};
