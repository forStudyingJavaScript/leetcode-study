var Trie = function() {
  this.root = {
      children : {},
      isEnd : false
  }
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let node = this.root;
  
  for(let char of word) {
      if(!node.children[char]) {
          node.children[char] = {
              children: {},
              isEnd: false
          };
      }
      node = node.children[char];
  }
  
  node.isEnd = true;
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let node = this.root;
  
  // 단어의 각 문자에 대해
  for(let char of word) {
      if(!node.children[char]) {
          return false;
      }
      node = node.children[char];
  }

  return node.isEnd;
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let node = this.root;

  for(let char of prefix) {
      if(!node.children[char]) {
          return false;
      }
      node = node.children[char];
  }
  
  return true;
};