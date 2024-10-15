class Solution
{
public:
    vector<int> twoSum(vector<int>& nums, int target)
    {
        unordered_map<int, int> m;
        for (int i = 0; i < nums.size(); ++i)
            m[nums[i]] = i;

        vector<int> res;
        for (int i = 0; i < nums.size(); ++i)
        {
            int k1 = nums[i], k2 = target - k1;
            if (m.count(k2) && m[k2] != i)
            {
                res.push_back(i);
                res.push_back(m[k2]);
                break;
            }
        }

        return res;
    }
};

