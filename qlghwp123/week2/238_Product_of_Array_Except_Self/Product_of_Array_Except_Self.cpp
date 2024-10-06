//
// Created by qlghwp123 on 2024-10-01.
//
class Solution {
public:
    // DP
    // 시간 복잡도 O(N), 공간 복잡도 O(1)
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> output(n);
        output[0] = 1;

        // 이전 값을 곱해서 저장해둔다.(각각 i 를 기준으로 좌측 값을 모두 곱한 값을 저장)
        for(int i = 1; i < n; i++){
            output[i] = output[i - 1] * nums[i - 1];
        }

        // 이후 값을 곱해서 저장해둔다.(각각 i 를 기준으로 우측 값을 모두 곱한 값을 저장)
        int right = 1;
        for(int i = n - 1; i >= 0; i--){
            output[i] *= right;
            right *= nums[i];
        }
        return output;
    }
};