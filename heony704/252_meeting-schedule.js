class Solution {
    /**
     * https://neetcode.io/problems/meeting-schedule
     * 8:19
     * 
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const times = new Set();

        for (const interval of intervals) {
            for (let i=interval.start+1; i<=interval.end; i++) {
                if (times.has(i)) return false;
                else times.add(i);
            }
        }
        return true;
    }
}
