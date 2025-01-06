const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(data) {
    data ? this.rootNode = new Node(data) : this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    let curr = null;
    if (!this.rootNode) {
      this.rootNode = new Node(data);
    } else {
      curr = this.rootNode
      while (curr.left || curr.right) {
        if (data < curr.data) {
          if (!curr.left) {
            curr.left = new Node(data);
            return;
          } else { curr = curr.left }
        } else if (data > curr.data) {
          if (!curr.right) {
            curr.right = new Node(data);
            return;
          } else { curr = curr.right }
        }
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};