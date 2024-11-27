class Node {
  constructor({ key, data = null }) {
    this.key = key;
    this.data = data;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.head = new Node({ key: null });
  }

  insert(word) {
    let currentNode = this.head;

    for (let i = 0; i < word.length; i++) {
      const str = word[i];
      const newNode = currentNode.children?.[str]
        ? currentNode.children[str]
        : new Node({ key: str });

      if (i === word.length - 1) newNode.data = word;
      currentNode.children[str] = newNode;
      currentNode = newNode;
    }
  }

  search(word) {
    let currentNode = this.head;

    for (const str of word) {
      if (currentNode.children[str]) currentNode = currentNode.children[str];
      else return false;
    }

    if (currentNode.data) return true;
    else return false;
  }

  startsWith(prefix) {
    let currentNode = this.head;

    for (const str of prefix) {
      if (currentNode.children[str]) currentNode = currentNode.children[str];
      else return false;
    }

    return true;
  }
}
