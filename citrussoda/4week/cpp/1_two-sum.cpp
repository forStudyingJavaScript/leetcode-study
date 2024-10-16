class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> m;

        for (int i = 0; i < nums.size(); i++) {
            // if (m.find(target - nums[i]) != m.end()) {
            // count 가 읽기도 쉽고 더 빠르다!! <= 틀린내용 다만 큰 차이는 없음 알고리즘에 따라 다른 것 같다. 혹은 set과 map에 따라서도 다른듯.
            if (m.count(target - nums[i])) {
                return {m[target - nums[i]], i};
            }

            m[nums[i]] = i;
        }

        return {};
    }
};