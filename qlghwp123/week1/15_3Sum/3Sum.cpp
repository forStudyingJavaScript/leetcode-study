//
// Created by user on 2024-09-24.
//
#include <algorithm>
#include <numeric>


class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
    /*
        neetcode 에서는 시간초과 X
        TS 자체가 leetcode 가 더 많고 범위가 넓다.
        nums 가 1000일 때의 반복 수 1000! / (997! * 3!) = 166,167,000
        1억 초과라 시간
     */
    /*
        vector<vector<int>> result;

        vector<int> temp;
        set<vector<int>> distinct;

        int n = nums.size();
        int r = 3;

        vector<bool> ind;

        for(int i = 0; i < n; i++) {
            // n == r 인 경우 때문에, true false 위치가 반대가 되면 안됨.
            (i < r) ? ind.push_back(true) : ind.push_back(false);
        }

        sort(ind.begin(), ind.end());

        do {
            for(int i = 0; i < ind.size(); i++) {
                if(ind[i]) {
                    temp.push_back(nums[i]);
                    cout << nums[i] << ' ';
                }
            }

            cout << '\n';

            if(!accumulate(temp.begin(), temp.end(), 0) && temp.size()) {
                sort(temp.begin(), temp.end());
                distinct.insert(temp);
            }

            temp.clear();
        } while(next_permutation(ind.begin(), ind.end()));

        for(vector<int> v : distinct) {
            result.push_back(v);
        }

        return result;

     */

    /*
        시간 초과가 되어서 다른 풀이를 참조 했습니다.
        투 포인터 문제를 위주로 더 풀어봐야겠습니다.
     */
        vector<vector<int>> res;

        // 아래 if ~ else 로직을 위한 오름차순 정렬
        sort(nums.begin(), nums.end());

        for (int i = 0; i < nums.size(); i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }

            // 좌, 우 포인터 설정
            int j = i + 1;
            int k = nums.size() - 1;

            // 만날 때까지 진행
            while (j < k) {
                int total = nums[i] + nums[j] + nums[k];

                // 양수쪽 절댓값이 크다는 말이므로 우측 포인터 이동
                if (total > 0) {
                    k--;
                // 반대로 음수쪽 절댓값이 크다는 말이므로 좌측 포인터 이동
                } else if (total < 0) {
                    j++;
                } else {
                    // 0인 경우를 찾았으므로 종료를 위해 좌측 포인터 이동
                    res.push_back({nums[i], nums[j], nums[k]});
                    j++;

                    // 중복일 경우 통과
                    while (nums[j] == nums[j-1] && j < k) {
                        j++;
                    }
                }
            }
        }
        return res;
    }
};
