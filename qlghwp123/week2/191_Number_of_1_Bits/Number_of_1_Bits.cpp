//
// Created by qlghwp123 on 2024-10-01.
//
class Solution {
public:
    // 0 이 될 때까지 2로 계속 나눈다
    // 나눌 때 마다 1과 & 연산을 해서 나온 결과가 1이 나올 때 마다 결과값에 +1 을 한다.
    int hammingWeight(int n) {
        int result = 0;
        while(n != 0) {
            if(n & 1) {
                result += 1;
            }
            n /= 2;
        }

        return result;
    }
};