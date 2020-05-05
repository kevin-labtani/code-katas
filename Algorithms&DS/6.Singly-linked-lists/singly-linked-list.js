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

  // PUSH
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

  // POP
  // if there are no nodes in the list, return undefined
  // loop through the entire list until you reach the tail
  // set the next property of the 2nd to last node to be null
  // set the tail to be the 2nd to last node
  // decrement the length of the list by 1
  // return the node that was removed
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      // edge case: reset head and tail if the list is empty
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // SHIFT
  // if there are no nodes, return undefined
  // store the current head property in a variable
  // set the head property to be the current head's next property
  // decrement the length by 1
  // return the value of the node removed
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      // edge case: reset head and tail if the list is empty
      this.tail = null;
    }
    return current;
  }

  // UNSHIFT
  // unshift accept a value
  // create a new node using the value passed to the function
  // if there's no head property on the list, set the head and tail to be the newly created node
  // otherwise, set the newly created node's next property to be the current head property on the list
  // set the head property on the list to be that newly created node
  // increment the length by 1
  // return the linked list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // GET (retrieve a node by its position in the linked list)
  // accept an index
  // if the index is less than zero or greater than or equal to the length of the list, return null
  // loop through the lost until you reach the index and return the nnode at that specific index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }
}

let list = new SinglylinkedList();
list.push("hello");
list.push("goodbye");
console.log(list.pop());
list.push("hello again");
list.push("goodbye again");
console.log(list.shift());
list.unshift("this is getting confusing");
console.log(list.get(2));

console.log(list);
console.log(list.length);
