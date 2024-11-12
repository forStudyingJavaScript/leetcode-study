/**
 * https://leetcode.com/problems/spiral-matrix/
 * 1h
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const orders = [];
  let count = 0;

  const m = matrix.length;
  const n = matrix[0].length;
  const size = m * n;

  while (orders.length < size) {
    for (let i = 0 + count; i < n - count; i++) {
      orders.push(matrix[0 + count][i]);
    }
    for (let i = 1 + count; i < m - count; i++) {
      orders.push(matrix[i][n - 1 - count]);
    }
    for (let i = n - 2 - count; i >= 0 + count; i--) {
      orders.push(matrix[m - 1 - count][i]);
    }
    for (let i = m - 2 - count; i > 0 + count; i--) {
      orders.push(matrix[i][0 + count]);
    }
    count++;
  }

  return orders.slice(0, size);
};
