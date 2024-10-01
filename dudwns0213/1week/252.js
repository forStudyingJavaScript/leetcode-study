/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 *
 * 회의를 겹치지 않게 추가해보자!
 *
 * 일단 회의를 정렬해야 한다(사실 까먹고있었다...).
 * 정렬 후, 루프 범위를 설정한다. i를 int.length까지 반복되도록 해야 한다.
 * 배열의 인덱스를 초과할 수 있으니 <를 사용, -1을 해주자
 *
 * 처음 회의의 종료 시간과 다음 회의의 시작시간을 비교하면 끝!
 *
 *
 */

class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {boolean}
   */
  canAttendMeetings(intervals) {
    intervals.sort((a, b) => a.start - b.start);

    for (let i = 0; i < intervals.length - 1; i++) {
      if (intervals[i].end > intervals[i + 1].start) {
        return false;
      }
    }
    return true;
  }
}
