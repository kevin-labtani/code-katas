class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // PUSH
  // push accept a value
  // create a new node using the value passed to the function
  // if there's no head property on the list, set the head and tail to be the newly created node
  // otherwise, set the next property on the tail to be the new node and; and set the previous property on the newly created note to be the tail; ad set the tail to be the newly created node
  // increment the length by 1
  // return the list
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // POP
  // if there are no nodes in the list, return undefined
  // store the current tail in a variable to be returned later
  // if the length is 1, set the head and the tail to be null
  // update the tail to be the previous node
  // set the newTail's next to be null and set the old tail's prev to be null
  // decrement the length of the list by 1
  // return the node that was removed
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  // SHIFT
  // if there are no nodes, return undefined
  // store the current head property in a variable
  // if the length is 1, set the had and the tail to be null
  // set the head property to be the old head's next property
  // set the new head's prev property to be null
  // set the old head's next to be null
  // decrement the length by 1
  // return the old head
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // UNSHIFT
  // unshift accept a value
  // create a new node using the value passed to the function
  // if there's no head property on the list, set the head and tail to be the newly created node
  // otherwise, set the newly created node's next property to be the current head property on the list
  //            set the prev property on the head of the list to be the new node
  //            set the head property on the list to be that newly created node
  // increment the length by 1
  // return the linked list
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

let list = new DoublyLinkedList();
list.push("hello");
list.push("how are you?");
list.push("fine I hope?");
list.push("goodbye");
console.log(list.pop());
console.log(list.shift());
list.unshift("new first")

console.log(list);
