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

  // INSERT
  // create a new node
  // starting at the root
  //    check if there is a root, if not, the root now becomes the new node
  //    if there is a root, check if the value of the new node is greater than or less than the value of the root
  //    if it's greater
  //        check to see if there is a node to the right
  //            if there is, move to that node and repeat these steps
  //            if there is not, add that node as the right property
  //    if it's less
  //        check to see if there is a node to the left
  //            if there is, move to that node and repeat these steps
  //            if there is not, add that node as the left property
  //  return the tree
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

  // FIND
  // starting at the root
  //    check is there is a root, if not, we're done searching!
  //    if there's a root, check if the value of the new node is the value we're looking for, if it is, we're done
  //    if not, check to see if the value is > or < the value of the root
  //    if it's greater
  //        check to see if there's a node to the right
  //            if there is, move to that node and repeat these steps
  //            if there is not, we're done searching
  //    if it's less
  //        check to see if there's a node to the left
  //            if there is, move to that node and repeat these steps
  //            if there is not, we're done searching
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
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(3);
tree.insert(6);
tree.insert(25);
console.log(tree.find(25));
console.log(tree.find(13));

console.log(tree);
