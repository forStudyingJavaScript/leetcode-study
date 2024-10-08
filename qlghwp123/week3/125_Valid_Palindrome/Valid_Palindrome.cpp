//
// Created by qlghwp123 on 2024-10-09.
//
class Solution {
public:
    bool alphanumericTest(char* an) {
        bool number = 0 <= *an - '0' && *an - '0' <= 9;
        bool lower = 0 <= *an - 'a' && *an - 'a' <= 25;
        bool upper = 0 <= *an - 'A' && *an - 'A' <= 25;

        if(upper) {
            *an += abs('a' - 'A');
        }

        return number || lower || upper;
    }

    bool isPalindrome(string s) {
        string palindrome = "";
        string reverseStr = "";

        for(char alpha : s) {
            if(alphanumericTest(&alpha)) {
                palindrome += alpha;
                reverseStr += alpha;
            }
        }

        cout << palindrome << '\n';

        reverse(reverseStr.begin(), reverseStr.end());

        cout << reverseStr << '\n';

        return palindrome == reverseStr;
    }
};