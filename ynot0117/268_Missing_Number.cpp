class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int ret = 0;
        int n = nums.size();
        vector<bool> plate(n + 1, false);

        for (auto num: nums)
            plate[num] = true;
        
        for (auto flag: plate)
        {
            if (flag == false)
                return ret;
            ret++;
        }

        return -1;
    }
};
