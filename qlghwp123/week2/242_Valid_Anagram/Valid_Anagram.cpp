//
// Created by qlghwp123 on 2024-10-01.
//
class Solution {
public:
    // 하나의 문자열에서 나타나는 글자 종류와 수가 일치 해야 하므로,
    // 2개의 map 자료구조를 사용해서 비교한 다음 같으면 true 이고 아니면 false 이다.
    bool isAnagram(string s, string t) {
        map<char, int> sm;
        map<char, int> tm;

        if(s.size() != t.size()) {
            return false;
        } else {
            for(char a : s) {
                if(sm.find(a) == sm.end()) {
                    sm[a] = 0;
                } else {
                    sm[a] += 1;
                }
            }

            for(char a : t) {
                if(tm.find(a) == tm.end()) {
                    tm[a] = 0;
                } else {
                    tm[a] += 1;
                }
            }

            if(sm == tm) {
                return true;
            } else {
                return false;
            }
        }
    }
};