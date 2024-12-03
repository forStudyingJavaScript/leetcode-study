// class Solution {
//  public:
//   int longestConsecutive(vector<int>& nums) {
//     if (nums.size() == 0) return 0;

//     int minNum = *min_element(nums.begin(), nums.end());
//     int maxNum = *max_element(nums.begin(), nums.end());
//     int answer = 0;
//     int tempAnswer = 0;

//     for (int i = minNum; i <= maxNum; i++) {
//       if (find(nums.begin(), nums.end(), i) != nums.end()) {
//         tempAnswer++;
//         answer = max(tempAnswer, answer);
//       } else {
//         tempAnswer = 0;
//       }
//     }

//     return answer;
//   }
// };

class Solution {
 public:
  int longestConsecutive(vector<int>& nums) {
    unordered_set<int> numSet(nums.begin(), nums.end());
    int answer = 0;

    for (int num : numSet) {
      // 시작 기준을 해당 수의 - 1이 없으면으로 잡아 while을 돌때 중복을 막는다.
      // (while은 1씩 더해서 확인하므로..)
      if (numSet.find(num - 1) == numSet.end()) {
        int length = 1;

        while (numSet.find(num + length) != numSet.end()) {
          length++;
        }

        answer = max(length, answer);
      }
    }

    return answer;
  }
};