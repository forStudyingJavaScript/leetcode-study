var spiralOrder = function (matrix) {
  const result = [];
  let m = matrix[0].length;
  let n = matrix.length;
  let direction = 0;
  let spiralCount = 0;
  let i = 0,
    j = 0;

  for (let count = 0; count < m * n; count++) {
    result.push(matrix[i][j]);

    if (direction === 0) {
      if (j < m - 1 - spiralCount) {
        j++;
      } else {
        direction = 1;
        i++;
      }
    } else if (direction === 1) {
      if (i < n - 1 - spiralCount) {
        i++;
      } else {
        direction = 2;
        j--;
      }
    } else if (direction === 2) {
      if (j > spiralCount) {
        j--;
      } else {
        direction = 3;
        i--;
      }
    } else if (direction === 3) {
      if (i > spiralCount + 1) {
        i--;
      } else {
        direction = 0;
        spiralCount++;
        j++;
      }
    }
  }

  return result;
};
