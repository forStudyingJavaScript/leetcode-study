class Solution
{
public:
    int maxProfit(vector<int>& prices) 
    {
        int max = 0, min = 0, res = 0;
        while (max < prices.size())
        {
            if (prices[max] - prices[min] > res)
                res = prices[max] - prices[min];

            if (prices[min] > prices[max])
                min = max;
            else
                max++;
        }

        return res;
    }
};
