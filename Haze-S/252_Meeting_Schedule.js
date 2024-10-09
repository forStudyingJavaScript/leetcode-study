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
    let sortInterval = intervals.sort((a, b) => a.start - b.start);
    for (let i = 1; i < sortInterval.length; i++) {
      if (sortInterval[i].start < sortInterval[i - 1].end) return false;
    }
    return true;
  }
}
