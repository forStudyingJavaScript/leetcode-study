/*
/ 26분 소요
/ 
/ 시간 복잡도: O(n log n)
/ 
/ 시작 시간을 기준으로 오름차순 정렬한 뒤, 배열을 순회하며 현재 회의의 시작 시간이 이전 회의의 종료 시간보다 빠른지 확인합니다.
/ 만약 빠르다면 false를 반환하고, 모든 회의에 대해 충돌이 없을 경우 true를 반환합니다.
*/
class Solution {
  canAttendMeetings(intervals) {
    // 시작 시간을 기준으로 오름차순 정렬 (O(n log n))
    intervals.sort((a, b) => a.start - b.start);

    // 배열 순회 (O(n))
    for (let i = 1; i < intervals.length; i++) {
      // 현재 회의의 시작 시간이 이전 회의의 종료 시간보다 빠른 경우 false 반환
      if (intervals[i].start < intervals[i - 1].end) return false;
    }

    // 모든 회의에 대해 충돌이 없을 경우 true 반환
    return true;
  }
}
