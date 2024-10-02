class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        sort(nums.begin(), nums.end());

        int before = nums[0];
        for(int index = 1; index < nums.size(); index++)
        {
            int now = nums[index];
            if (now == before)
                return true;
            before = now;
        }
        return false;
    }
};