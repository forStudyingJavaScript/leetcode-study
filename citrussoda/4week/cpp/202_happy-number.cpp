class Solution {
public:
    int newNumber(int n) {
        int newNumber = 0;

        while(n != 0) {
            int num = n % 10;
            newNumber += num * num;
            n = n / 10;
        }

        return newNumber;
    }

    bool isHappy(int n) {
        unordered_set<int> s;

        while(!s.count(n)) {
            s.insert(n);
            cout << n << '\n';
            // split('').map or forEach가 그리웠습니다..
            n = newNumber(n);
        }

        return n==1;
    }
};