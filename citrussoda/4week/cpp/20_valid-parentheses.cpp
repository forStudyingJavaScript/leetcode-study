// 벡터로 풀 수 있다면 벡터를 사용하는 것이 훨씬 빠르다.
// 메모리는 unordered_map을 if문제 직접 적는 방식으로 해결 할 수 있으나
// stack을 이미 쓰고있어 공간복잡도는 O(n)이므로 코드를 보기 좋게 하기 위해
// 추가하였다.

class Solution {
public:
    bool isValid(string s) {
        stack<char> st;
        unordered_map<char, char> um = {
            {')', '('},
            {']', '['},
            {'}', '{'}
        };

        for (auto c: s) {
            if (!st.empty() && um[c] == st.top()) {
                st.pop();
            }
            else {
                st.push(c);
            }
        }

        return st.empty();
    }
};

// class Solution {
// public:
//     bool isValid(string s) {
//         vector<char> v;
//         unordered_map<char, char> um = {
//             {')', '('},
//             {']', '['},
//             {'}', '{'}
//         };

//         for (auto c: s) {
//             if (!v.empty() && um[c] == v.back()) {
//                 v.pop_back();
//             }
//             else {
//                 v.push_back(c);
//             }
//         }

//         return v.empty();
//     }
// };