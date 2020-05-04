class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglylinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push accept a value
  // create a new node using the value passed to the function
  // if there's no head property on the list, set the head and tail to be the newly created node
  // otherwise, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
  // increment the length by 1
  // return the linked list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let list = new SinglylinkedList();
list.push("hello");
list.push("goodbye");

console.log(list);
console.log(list.length);
