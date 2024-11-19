// 크기 초과 ㅠㅠ
// class Solution {
//  public:
//   int getSum(int a, int b) { return log(exp(a) * exp(b)); }
// };

// 천재인가..? 자바스크립트도 sum을 달라...
// class Solution {
// public:
//     int getSum(int a, int b) {
//         vector<int> v{a,b};
//         return accumulate(begin(v),end(v),0);
//     }
// };

class Solution {
 public:
  int getSum(int a, int b) {
    while (b != 0) {
      unsigned int carry = a & b;  // 올려줄 자리 계산
      a = a ^ b;                   // 각 자리 더하기
      b = carry << 1;              // 올려줄 자리를 왼쪽으로 시프트
    }
    return a;
  }
};