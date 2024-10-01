class Solution
{
public:
    bool containsDuplicate(vector<int>& nums)
    {
        unordered_set<int> s;
        for (int n : nums) s.insert(n);

        return nums.size() != s.size();
    }
};
