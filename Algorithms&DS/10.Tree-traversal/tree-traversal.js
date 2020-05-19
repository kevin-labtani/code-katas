class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined; // ignore duplicates
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }

  // BREATH FIRST SEARCH
  // create a queue (this can be an array) and a variable to store the values of nodes visited
  // place the root of the node in the queue
  // loop as long as there is anything in the queue
  //    dequeue a node from the queue and push the value of the node into the variable that store the nodes
  //    if there is a left property on the node dequeued - add it to the queue
  //    if there is a right property on the node dequeued - add it to the queue
  // return the variable that stores the values
  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  // DEPTH FIRST SEARCH PreOrder
  // create a variable to store the values of the nodes visited
  // store the root of the BST in a variable called current
  // write a helper funciton which accets a node
  //    push the value of the node to the variable that stores the values
  //    if the node has a left property, call the helper function with the left property on the noed
  //    if the node has a right property, call the helper function with the right property on the noed
  // invoke the helper function with the current variable
  // return the array of values
  DFSPreOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  // DEPTH FIRST SEARCH PostOrder
  // same as PreOrder but we go all the way to the left then all the way to the right and then we visit the nodes (the root is the last node visited):
  // create a variable to store the values of the nodes visited
  // store the root of the BST in a variable called current
  // write a helper funciton which accets a node
  //    if the node has a left property, call the helper function with the left property on the noed
  //    if the node has a right property, call the helper function with the right property on the noed
  //    push the value of the node to the variable that stores the values
  // invoke the helper function with the current variable
  // return the array of values
  DFSPostOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }

  // DEPTH FIRST SEARCH InOrder
  // same as PreOrder but fist we traverse the entire left side, then visit the nodes and then traverse the entire rigth side:
  // create a variable to store the values of the nodes visited
  // store the root of the BST in a variable called current
  // write a helper funciton which accets a node
  //    if the node has a left property, call the helper function with the left property on the noed
  //    if the node has a right property, call the helper function with the right property on the noed
  //    push the value of the node to the variable that stores the values
  // invoke the helper function with the current variable
  // return the array of values
  DFSInOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
//         10
//      6    15
//    3  8     20
console.log(tree);
console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
