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

  remove(data) {
    if (this.rootNode === null) return;
    let curr = this.rootNode;
    let prev = null;

    while (curr && curr.data !== data) {
      prev = curr;
      curr = data < curr.data ? curr.left : curr.right;
    }

    if (!curr) return;

    if (!curr.left && !curr.right) {
      if (!prev) this.rootNode = null;
      else if (prev.left === curr) prev.left = null;
      else prev.right = null;
    }

    else if (!curr.left || !curr.right) {
      const child = curr.left || curr.right;
      if (!prev) this.rootNode = child;
      else if (prev.left === curr) prev.left = child;
      else prev.right = child;
    }

    else {
      let parent = curr;
      let descendant = curr.right;


      while (descendant.left) {
        parent = descendant;
        descendant = descendant.left;
      }

      curr.data = descendant.data;
      if (parent.left === descendant) {
        parent.left = descendant.right;
      } else {
        parent.right = descendant.right;
      }
    }
  }

  min() {
    if (this.rootNode === null) return null;
    let curr = this.rootNode;
    while (curr.left) { curr = curr.left; }
    return curr.data;
  }

  max() {
    if (this.rootNode === null) return null;
    let curr = this.rootNode;
    while (curr.right) { curr = curr.right; }
    return curr.data;
  }
}

module.exports = {
  BinarySearchTree
};