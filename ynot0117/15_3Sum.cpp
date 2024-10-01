class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> ret;

        sort(nums.begin(), nums.end());

        int pivot = 0;

        for(int i = 0; i < nums.size() - 2; i++)
        {
            pivot = nums[i];
            if (0 < i && pivot == nums[i - 1])
                continue;

            if (0 < pivot)
                break;

            int start = i + 1;
            int end = nums.size() - 1;

            while(start < end)
            {
                if (pivot + nums[start] + nums[end] == 0)
                {
                    ret.push_back({pivot, nums[start], nums[end]});

                    while (nums[start] == nums[start + 1] && start < end - 1)
                        start++;
                }
                if (-pivot < nums[start] + nums[end])
                    end--;
                else
                    start++;
            }
        }

        return ret;
    }
};
