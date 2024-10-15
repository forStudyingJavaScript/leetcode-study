class Solution
{
public:
    bool isValid(string str)
    {
        vector<char> s;
        for (auto& c : str)
        {
            if (c == '(' || c == '{' || c == '[')
                s.push_back(c);
            else
            {
                if (s.empty() ||
                    c == ')' && s.back() != '(' ||
                    c == '}' && s.back() != '{' ||
                    c == ']' && s.back() != '[')
                    return false;

                s.pop_back();
            }
        }

        return s.empty();
    }
};
