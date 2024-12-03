/**
 * 13m25s 소요
 *
 * 시간복잡도: O(N log K) (N: nums의 길이, K: k)
 *
 * 배열에서 k번째로 큰 요소를 찾는 문제입니다.
 *
 * 최소 힙을 사용하여 풀 수 있습니다.
 * 배열을 순회하며 힙에 요소를 삽입합니다.
 * 힙 크기가 k를 초과하면 가장 작은 값을 제거합니다.
 * 힙의 첫 번째 요소가 k번째로 큰 값입니다
 */
var findKthLargest = function (nums, k) {
  const minHeap = new MinPriorityQueue(); // 최소 힙 생성

  for (let num of nums) {
    minHeap.enqueue(num); // 힙에 삽입

    // 힙 크기가 k를 초과하면 가장 작은 값 제거
    if (minHeap.size() > k) {
      minHeap.dequeue();
    }
  }

  // 힙의 첫 번째 요소가 k번째로 큰 값
  return minHeap.front().element;
};
