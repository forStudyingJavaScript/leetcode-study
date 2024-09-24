class Solution {
  /**
   * 모든 회의를 충돌없이 소화 가능한지 여부
   *
   * @param {Interval[]} intervals -
   *  class Interval {
   *   constructor(start, end) {
   *     this.start = start;
   *     this.end = end;
   *   }
   * @returns {boolean}
   */
  canAttendMeetings(intervals) {
    // 시작 순으로 정렬한 뒤, 끝나는 시간을 기록해서 비교한다
    // if (새로운 시작시간 < 기존에 기록해둔 끝나는 시간) return false
    // if (새로운 시작시간 >= 기존에 기록해둔 끝나는 시간) 끝나는 시간을 업데이트 Math.max(기존 end, 현재 end) 후 게속 진행
    intervals.sort((a, b) => a.start - b.start);

    let currentEnd = -1;

    for (const { start, end } of intervals) {
      if (start < currentEnd) return false;
      currentEnd = Math.max(currentEnd, end);
    }

    return true;
  }
}
