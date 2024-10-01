/**
 * Definition of Interval:
 * class Interval {
 * public:
 *     int start, end;
 *     Interval(int start, int end) {
 *         this->start = start;
 *         this->end = end;
 *     }
 * }
 */

class Solution
{
public:
    bool canAttendMeetings(vector<Interval>& intervals)
    {
        sort(intervals.begin(), intervals.end(), [&](auto& i1, auto& i2){
            return i1.start < i2.start;
        });

        int n = intervals.size() - 1;
        for (int i = 0; i < n; ++i)
            if (intervals[i].end > intervals[i + 1].start)
                return false;

        return true;
    }
};
