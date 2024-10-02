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

class Solution {
public:
    static bool compare(Interval first, Interval second) {
        if (first.start == second.start)
            return (first.end < second.end);
        return (first.start < second.start);
    };

    bool canAttendMeetings(vector<Interval>& intervals) {

        sort(intervals.begin(), intervals.end(), compare);

        for(int i = 1; i < intervals.size(); i++)
            if (intervals[i].start < intervals[i-1].end)
                return false;

        return true;
    }
};
