//
// Created by qlghwp123 on 2024-10-09.
//
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        map<string, vector<string>> t;
        vector<vector<string>> result;

        for(string s : strs) {
            string c = s;
            sort(c.begin(), c.end());
            t[c].push_back(s);
        }

        for(auto v : t) {
            result.push_back(v.second);
        }

        return result;
    }
};