// Trie는 문자열을 저장하고 효율적으로 검색하기 위한 트리 자료구조이다.
// 각 노드는 문자를 나타내며, 루트에서 특정 노드까지의 경로가 하나의 문자열을 형성한다.
// 구성요소는 1. 자식 노드를 저장할 객체(children) 2. 현재 노드가 단어의 끝인지 표시하는 플래그(isEndOfWord)
// 루트 노드가 있어야 한다. 루트 노드는 시작점을 의미하며 초기값을 통일한다.

var TrieNode = function () {
  this.children = {};
  this.isEndOfWord = false;
};

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
// 단어 추가 메서드이다.
// 입력된 단어의 각 문자를 순서대로 조회하면서 없으면 새로운 노드를 생성하고 있으면 기존 노드로 이동한다.
// 마지막 문자의 노드에 isEndOfWord를 true로 설정하여 단어의 끝임을 표시한다.
Trie.prototype.insert = function (word) {
  let current = this.root;

  // 단어의 각 문자에 대해
  for (let char of word) {
    // 현재 문자에 대한 노드가 없다면 새로 생성
    if (!current.children[char]) {
      current.children[char] = new TrieNode();
    }
    // 다음 노드로 이동
    current = current.children[char];
  }
  // 단어의 끝임을 표시
  current.isEndOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
// 서치 메서드이다.
// 입력한 단어가 저장된 단어인지 참/거짓을 반환한다.
// 알파벳을 순서대로 순회하면서 중간에 경로가 끊기면 거짓을 반환한다. 저장된 단어가 없는 것.
// 마지막 문자까지 순회를 완료하면 해당 노드의 isEndOfWord 값을 반환한다.
// isEndOfWord가 참이면 그 경로가 완성된 단어라는 의미이고, 거짓이면 완성된 단어가 아니라는 의미이다.
Trie.prototype.search = function (word) {
  let current = this.root;

  // 단어의 각 문자에 대해
  for (let char of word) {
    // 현재 문자에 대한 노드가 없다면 false 반환
    if (!current.children[char]) {
      return false;
    }
    current = current.children[char];
  }
  // 마지막 노드가 단어의 끝인지 확인
  return current.isEndOfWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
// 입력된 문자열이 저장된 경로에 존재하는지 확인하는 메서드이다.
// prefix의 모든 문자가 경로상에 존재하면 true를 반환한다.
// 단어의 완성 여부(isEndOfWord)는 확인하지 않는다.
Trie.prototype.startsWith = function (prefix) {
  let current = this.root;

  // prefix의 각 문자에 대해
  for (let char of prefix) {
    // 현재 문자에 대한 노드가 없다면 false 반환
    if (!current.children[char]) {
      return false;
    }
    current = current.children[char];
  }
  // prefix의 모든 문자가 존재하면 true 반환
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

//time: 42m
//memory: 67.80MB
