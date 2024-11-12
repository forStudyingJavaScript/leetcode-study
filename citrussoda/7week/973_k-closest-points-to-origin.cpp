class Solution {
 public:
  vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
    sort(points.begin(), points.end(), [](auto& p1, auto& p2) {
      return p1[0] * p1[0] + p1[1] * p1[1] < p2[0] * p2[0] + p2[1] * p2[1];
    });

    points.resize(k);

    return points;
  }
};