//
// Created by user on 2024-09-24.
//
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

#include <algorithm>

class Solution {
public:
    static bool cmp(const Interval& a, const Interval& b) {
        return (a.start < b.start) ? true : false;
    }

    // 정렬을 일단 start 기준으로 먼저하고,
    // 앞 Interval 객체의 끝 시간이 뒤 Interval 객체의 시작 시간 겹쳐지는지만 확인
    bool canAttendMeetings(vector<Interval>& intervals) {
        if(intervals.size()) {
            sort(intervals.begin(), intervals.end(), cmp);

            for(int i = 0; i < intervals.size() - 1; i++) {
                int j = i + 1;

                if(intervals[i].end > intervals[j].start) {
                    return false;
                }
            }
        }

        return true;
    }
};