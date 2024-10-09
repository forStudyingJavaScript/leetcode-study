class Solution
{
public:
    bool isPalindrome(string s)
    {
        int n = s.length();
        int i = 0, j = n - 1;
        while (i < n && j >= 0 && i <= j)
        {
            char f = s[i];
            char b = s[j];

            if (!isalnum(f))      ++i;
            else if (!isalnum(b)) --j;
            else if (tolower(f) == tolower(b))
            {
                ++i;
                --j;
            }
            else
                return false;
        }

        return true;
    }
};
