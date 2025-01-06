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
      return;
    } else {
      curr = this.rootNode
      while (true) {
        if (data < curr.data) {
          if (!curr.left) {
            curr.left = new Node(data);
            return;
          }
          curr = curr.left;
        }
        if (data > curr.data) {
          if (!curr.right) {
            curr.right = new Node(data);
            return;
          }
          curr = curr.right;
        } if (data === curr.data) { return; }
      }
    }
  }

  has(data) {
    if (this.rootNode === null) return false;
    let curr = this.rootNode;
    while (curr !== null) {
      if (curr.data === data) {
        return true;
      }
      else if (data < curr.data) { curr = curr.left; }
      else { curr = curr.right; }
    }
    return false;
  }

  find(data) {
    if (this.rootNode === null) return null;
    let curr = this.rootNode;
    while (curr !== null) {
      if (curr.data === data) {
        return curr;
      }
      else if (data < curr.data) { curr = curr.left; }
      else { curr = curr.right; }
    }
    return null;
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