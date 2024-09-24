class Solution {
public:
    int maxProfit(vector<int>& prices) { // 순서가 정해진 두 날짜 사이의 최대차이
        int max_profit = 0;
        int buy = 10001;

        for (auto price: prices)
        {
            if (price < buy)
                buy = price;
            if (max_profit < price - buy)
                max_profit = price - buy;
        }
        
        return max_profit;
    }
};
