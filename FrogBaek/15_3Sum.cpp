class Solution
{
public:
    vector<vector<int>> threeSum(vector<int>& nums)
    {
        sort(nums.begin(), nums.end());

        vector<vector<int>> res;
        set<vector<int>> temp;
        for (int fixed = 0; fixed < nums.size(); ++fixed)
        {
            int i = fixed + 1;
            int j = nums.size() - 1;
            while (i < j)
            {
                int sum = nums[fixed] + nums[i] + nums[j];
                if (sum == 0)
                {
                    temp.insert({nums[fixed], nums[i], nums[j]});
                    i++;
                    j--;
                }
                else if (sum < 0)
                {
                    i++;
                }
                else
                {
                    j--;
                }
            }
        }

        for (auto& t : temp)
            res.push_back(t);

        return res;
    }
};
