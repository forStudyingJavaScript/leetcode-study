class Solution
{
public:
    bool isHappy(int n)
    {
        auto getNext = [](int num){
            int sum = 0;
            while (num > 0)
            {
                int digit = num % 10;
                sum += digit * digit;
                num /= 10;
            }

            return sum;
        };

        int n1 = n, n2 = getNext(n);
        while (n2 != 1 && n1 != n2)
        {
            n1 = getNext(n1);
            n2 = getNext(getNext(n2));
        }

        return n2 == 1;
    }
};

