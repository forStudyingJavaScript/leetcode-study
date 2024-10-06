//
// Created by qlghwp123 on 2024-10-01.
//
class Solution {
public:
    // DP 는 진짜 감을 못잡아서 풀이를 참조했습니다.
    // 최저 코스트[i] = 코스트 배열[i] + 최솟값(최저 코스트[i - 1] + 최저 코스트[i - 2])
    int minCostClimbingStairs(vector<int>& cost) {
        // 제약 조건에서 2개가 최소 길이
        int n = cost.size();
        int first = cost[0];
        int second = cost[1];

        // 2개면 둘 중 작은거 택하기
        if (n <= 2){
            return min(first, second);
        }

        // first 가 second 로 바뀌고,
        // second 가 현재 계산된 curr 로 바뀐다.
        for(int i = 2; i < n; i++) {
            int curr = cost[i] + min(first, second);
            first = second;
            second = curr;
        }

        // 다 계산했으면 first 와 second 더 작은 값이 결과가 된다.
        return min(first, second);
    }
};