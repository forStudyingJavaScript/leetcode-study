/**
 * 208. Implement Trie (Prefix Tree)
Medium
Topics
Companies
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

1 <= word.length, prefix.length <= 2000
word and prefix consist only of lowercase English letters.
At most 3 * 104 calls in total will be made to insert, search, and startsWith.
 */

// var Trie = function() {
//     node
// };

class TrieNode {
  constructor() {
    this.children = {};
    this.words = new Set();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  traverse(word) {
    let node = this.root;
    for (let char of word) {
      node = node.children[char];
      if (!node) return null;
    }
    return node;
  }
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (const char of word) {
    if (!node.children[char]) {
      node.children[char] = new TrieNode();
    }
    node = node.children[char];
  }
  node.words.add(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.traverse(word);
  return !!node && node.words.has(word);
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.traverse(prefix);
  return !!node;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
