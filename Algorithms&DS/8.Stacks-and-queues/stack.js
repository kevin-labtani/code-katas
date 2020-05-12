// implement stack from singly linked list
// we'll use shift anf unshift from singly linked list and rename them push and pop, this way they'll be constant time, we do it thsi xay because the actual pop() method from singly linked lsit isn't constant time
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // PUSH
  // this function accept a value
  // create a new node with that value
  // if there are no nodes in the stack, set the first and last property to be the newly created node
  // if there is at least one undefinednode, create a variable that stores the curent first property on the stack
  // reset the first property to be the ewly created node
  // set the next property on the node to be the previously created variable
  // increment the size of the stack by 1
  // return the size
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  // POP
  // if there are no nodes in the stack, return null
  // create a temp variable to store the first property on the stack
  // if there is only one node, set the first and last property to be null
  // if there is more than one node, set the first property  to be the next property on the current first
  // decrement the size by 1
  // return the value of the node removed
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let stack = new Stack();
stack.push("33");
stack.push("44");
console.log(stack);
stack.pop();
console.log(stack);
