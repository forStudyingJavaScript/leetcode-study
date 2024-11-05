/**
 * 38m 41s 소요
 *
 * 시간복잡도: O(n * m) (n: 행의 길이, m: 열의 길이)
 *
 * 풀어보려고 했는데 어렵네요 풀이 참고해서 풀었습니다.
 *
 * 1. matrix의 행과 열의 길이를 구한다.
 * 2. top이 bottom보다 작거나 같고 left가 right보다 작거나 같을 때까지 반복한다.
 * 3. 왼쪽에서 오른쪽으로 이동하면서 result에 값을 추가한다.
 * 4. 위에서 아래로 이동하면서 result에 값을 추가한다.
 * 5. top이 bottom보다 작거나 같으면 오른쪽에서 왼쪽으로 이동하면서 result에 값을 추가한다.
 * 6. left가 right보다 작거나 같으면 아래에서 위로 이동하면서 result에 값을 추가한다.
 */
var spiralOrder = function (matrix) {
  const result = [];
  if (matrix.length === 0) return result;

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // 왼쪽에서 오른쪽으로 이동
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // 위에서 아래로 이동
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      // 오른쪽에서 왼쪽으로 이동
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      // 아래에서 위로 이동
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
};
