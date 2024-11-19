/**
 * 24m12s 소요
 *
 * 시간복잡도: O(m) (m: 문자열의 길이)
 *
 * Trie 구조를 처음 접해봐서 풀이와 ChatGPT의 도움을 받았습니다.
 *
 * Trie 구조를 구현하는 문제입니다.
 * Trie 구조는 문자열을 저장하고 검색하는 데 사용되는 트리 자료구조입니다.
 */
var TrieNode = function () {
  this.children = {};
  this.isEnd = false;
};

var Trie = function () {
  this.root = new TrieNode();
};

Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let char of word) {
    if (!node.children[char]) {
      node.children[char] = new TrieNode();
    }
    node = node.children[char];
  }
  node.isEnd = true;
};

Trie.prototype.search = function (word) {
  let node = this.root;
  for (let char of word) {
    if (!node.children[char]) {
      return false;
    }
    node = node.children[char];
  }
  return node.isEnd;
};

Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (let char of prefix) {
    if (!node.children[char]) {
      return false;
    }
    node = node.children[char];
  }
  return true;
};
