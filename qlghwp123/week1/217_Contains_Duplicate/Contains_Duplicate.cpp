//
// Created by user on 2024-09-24.
//
class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
    /*
        neetcode 에서는 아래 완전 탐색이 통과가 되지만
        leetcode 에서는 시간초과가 됩니다.

        생각을 해보면 집합을 사용하면 끝나는 문제인데...
     */
    /*
        for(int i = 0; i < nums.size(); i++) {
            for(int j = i + 1; j < nums.size(); j++) {
                if(nums[i] == nums[j]) {
                    return true;
                }
            }
        }

        return false;
     */
        set<int> distinct(nums.begin(), nums.end());

        return nums.size() != distinct.size();
    }
};
