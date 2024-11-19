/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  const result = [];
  
  for(let i = 0; i < points.length; i++) {
      result.push([
          points[i][0]**2 + points[i][1]**2,
          i  
      ]);
  }
  result.sort((a, b) => a[0] - b[0]);
  return result.slice(0, k).map(item => points[item[1]]);
}; 