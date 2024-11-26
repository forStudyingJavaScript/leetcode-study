/**
 * 32m13s 소요
 *
 * 시간복잡도: O(n)
 *
 * 이진 트리의 노드 값을 레벨 순서대로 반환하는 문제입니다.
 *
 * 큐를 이용하여 레벨 순서대로 노드 값을 저장하고, 결과를 반환합니다.
 * 빈 트리인 경우 빈 배열을 반환합니다.
 */
var levelOrder = function (root) {
  if (!root) return []; // 빈 트리인 경우 빈 배열 반환

  const result = [];
  const queue = [root]; // 루트 노드를 큐에 넣는다.

  while (queue.length) {
    const level = [];
    const len = queue.length;

    // 큐에 있는 노드를 모두 빼내서 level 배열에 넣는다.
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      level.push(node.val);

      // 왼쪽 자식 노드와 오른쪽 자식 노드를 큐에 넣는다.
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
};
