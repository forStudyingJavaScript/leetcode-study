/**
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 * 10m
 */

function TrieNode() {
  this.children = {}; // 자식 노드를 저장하는 객체
  this.isEnd = false; // 단어의 끝인지 여부 표시
}

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;

  for (const char of word) {
    // 해당 문자가 자식 노드에 없다면 새로 생성
    if (!node.children[char]) node.children[char] = new TrieNode();
    // 다음 문자로 이동
    node = node.children[char];
  }

  // 단어의 끝을 표시
  node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;

  for (const char of word) {
    // 해당 문자가 없으면 false 반환
    if (!node.children[char]) return false;
    node = node.children[char];
  }

  // 단어의 끝인지 확인
  return node.isEnd;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;

  for (const char of prefix) {
    // 접두사에 해당하는 문자가 없으면 false 반환
    if (!node.children[char]) return false;
    node = node.children[char];
  }

  // 접두사가 존재하면 true 반환
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
