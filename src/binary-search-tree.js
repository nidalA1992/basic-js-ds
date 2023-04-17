const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  #root = null;

  root() {
    return this.#root;
  }

  add(data) {
    if (!this.root()) {
      this.#root = new Node(data);
    }

    add(this.root());

    function add(node) {
      if (data === node.data) return;

      if (data < node.data) {
        if (!node.left) {
          node.left = new Node(data);
        } else {
          add(node.left);
        }
      }

      if (data > node.data) {
        if (!node.right) {
          node.right = new Node(data);
        } else {
          add(node.right);
        }
      }
    }
  }

  has(data) {
    return has(this.root());

    function has(node) {
      if(!node) return false;

      if(node.data === data) return true;

      if(data < node.data) return has(node.left);

      if(data > node.data) return has(node.right);
    }
  }

  find(data) {
    if (data === this.root()) {
      return this.root();
    }

    return find(this.root());

    function find(node) {
      if (!node) return null;

      if (node.data === data) return node;

      if (data < node.data) return find(node.left);

      if (data > node.data) return find(node.right);
    }
  }

  remove(data) {
    this.#root = remove(this.root());

    function remove(node) {
      if(!node) return null;

      if (data < node.data) {
        node.left = remove(node.left);
      }
      if (data > node.data) {
        node.right = remove(node.right);
      }

      if(data === node.data) {
        if(!node.left && !node.right) return null;

        if(!node.right) {
          node = node.left;
          return node;
        }

        if(!node.left) {
          if(!node.right.left) {
            node = node.right;
            return node;
          } else {
            const right = node.right;
            node = node.right.left;
            node.right = right;
            node.right.left = null;
            return node;
          }
        }
      }
    }
  }

  min() {
    return min(this.root());

    function min(node) {

      if (!node) return null;

      if (!node.left) return node.data;

      return min(node.left);
    }

  }

  max() {

    return max(this.root());

    function max(node) {
      if (!node) return false;

      if (!node.right) return node.data;

      return max(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};