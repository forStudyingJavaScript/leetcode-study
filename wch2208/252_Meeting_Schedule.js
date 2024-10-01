/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {boolean}
   */
  canAttendMeetings(intervals) {
    intervals.sort((a, b) => a.start - b.start);

    const noConflict = intervals.every((interval, i) => {
      if (i === 0) return true;
      return interval.start >= intervals[i - 1].end;
    });

    return noConflict;
  }
}

// Time taken: 43 m
