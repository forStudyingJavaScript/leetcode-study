class TrieNode {
 public:
  // 알파벳 가르킬 포인터
  TrieNode *child[26];
  // 해당 노드까지 완성된 단어인가 확인
  bool isWord;

  TrieNode() {
    isWord = false;
    for (auto &a : child) a = nullptr;
  }
};

class Trie {
  TrieNode *root;

 public:
  Trie() { root = new TrieNode(); }

  void insert(string s) {
    TrieNode *p = root;

    for (auto &a : s) {
      int i = a - 'a';
      if (!p->child[i]) p->child[i] = new TrieNode();
      p = p->child[i];
    }
    // 다 할당했으면 단어라고 선언, 포인터 변수기 때문에 for문에서 끝까지 할당한
    // 노드에서 isWord가 true
    p->isWord = true;
  }

  bool search(string key, bool prefix = false) {
    TrieNode *p = root;

    for (auto &a : key) {
      int i = a - 'a';
      if (!p->child[i]) return false;
      p = p->child[i];
    }

    // startWith를 위한 prefix 추가, startWith가 아니면 해당 노드가 끝까지
    // 갔는지 isWord만 확인하면 된다.
    if (prefix == false) return p->isWord;

    // startWith라면 해당 노드까지 모두 있는 것이므로 true
    return true;
  }

  bool startsWith(string prefix) { return search(prefix, true); }
};