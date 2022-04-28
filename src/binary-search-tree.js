const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  data
  left
  right

  constructor(data) {
    this.data = data
  }
}

class BinarySearchTree {
  
  root_node

  root() {
    return (this.root_node === undefined) ? null : this.root_node
  }

  add(data) {
    this.root_node = this.insert(this.root_node, data)
  }

  insert(node, data) {
    if (node === undefined) return new Node(data)
    if (data < node.data) node.left = this.insert(node.left, data)
    else if (data > node.data) node.right = this.insert(node.right, data)
    return node
  }


  has(data) {
    return this.find(data) !== null
  }

  find(data) {
    return this.findData(this.root_node, data)
  }

  findData(node, data) {
    if (node === undefined) return null
    if (data < node.data) return this.findData(node.left, data)
    if (data > node.data) return this.findData(node.right, data)
    return node
  }

  remove(data) {
    this.root_node = this.delete(this.root_node, data)
  }

  delete(node, data) {
    if (node === undefined) return undefined
    if (data < node.data) {
      node.left = this.delete(node.left, data)
      return node
    }
    else if (data > node.data){ 
      node.right = this.delete(node.right, data)
      return node
    }
    if(node.left === undefined) return node.right
    if(node.right === undefined) return node.left
    else {
      const min_data = this.getMin(node.right).data
      node.data = min_data
      node.right = this.delete(node.right, min_data)
      return node
    }
  }

  min() {
    return this.getMin(this.root_node).data
  }

  getMin(node) {
    return (node.left === undefined) ? node : this.getMin(node.left)
  }

  max() {
    return this.getMax(this.root_node).data
  }

  getMax(node) {
    return (node.right === undefined) ? node : this.getMax(node.right)
  }
}

module.exports = {
  BinarySearchTree
};

// const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(8);
// tree.add(31);
// tree.add(54);
// tree.add(1);
// tree.remove(14);
// tree.remove(8);
// tree.remove(9);
// console.log(tree.has(14));
// console.log(tree.has(8));
// console.log(tree.has(9));
// console.log(tree.has(2));
// console.log(tree.has(6));
// console.log(tree.has(128));
// console.log(tree.has(31));
// console.log(tree.has(54));
// console.log(tree.has(1));