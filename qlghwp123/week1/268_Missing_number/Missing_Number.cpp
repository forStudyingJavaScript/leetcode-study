//
// Created by user on 2024-09-24.
//
class Solution {
public:
    // 누적합으로 해결
    int missingNumber(vector<int>& nums) {
        int acc = 0;
        for(int i = 0; i <= nums.size(); i++) {
            acc += i;
        }

        int acc2 = 0;
        for(int i = 0; i < nums.size(); i++) {
            acc2 += nums[i];
        }

        return acc - acc2;
    }
};