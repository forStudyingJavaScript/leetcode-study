//
// Created by user on 2024-09-24.
//
class Solution {
public:
    int maxProfit(vector<int>& prices) {
    /*
        이전 Contains Duplicate 처럼 leetcode 에서는 시간초과.
        하나를 고정해놓고 우측을 움직이는거까지 생각해놓고
        투 포인터를 생각 못함.
    */
    /*
        int max = 0;
        for(int i = 0; i < prices.size(); i++) {
            for(int j = i + 1; j < prices.size(); j++) {
                if(max < prices[j] - prices[i]) {
                    max = prices[j] - prices[i];
                }
            }
        }

        return max;
    */
        int result = 0;
        int buy = 0;
        int sell = 0;

        while(sell < prices.size()) {
            if(prices[sell] > prices[buy]) {
                result = max(prices[sell] - prices[buy], result);
            } else {
                buy = sell;
            }
            sell++;
        }

        return result;
    }
};