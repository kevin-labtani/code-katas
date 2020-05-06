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

  // SET (change the value of a node based on its position in the linked list)
  // accept an index and a value
  // use the get method to find the specific node
  // if the node isn't found, return false
  // otherwise, set the calue of that node to be the value passed to the function and return true
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  // INSERT (add a node to the lined list at a specific position)
  // takes an index and a value
  // create a new node using the value passed to the function
  // if the index is less than zero or greater than the length of the list, return false
  // if the index is the same as the length, push a new node to the end of the list
  // if the index is 0, unsift a new node to the start of the list
  // otherwise, using the get method, access the node at the index - 1
  // set the next property on that node to be the new node
  // set the next property on the new node to be the previous next
  // increment the length
  // return true
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value); // !! double negate and coerce into boolean true so that the method lony returns ture or false (and not the actual list)
    if (index === 0) return !!this.unshift(value);

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // REMOVE (remove a node from the linked list at a specific position)
  // if the index is negative or greater than the length, return null
  // if the index is the same as the length-1, pop
  // if the index is zero, shift
  // otherwise, using the get method, access the node at the indecx -1
  // set the next property on that node to be the next of the next node
  // decrement the length
  // return the value of the node removed
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  // REVERSE
  // swap the head and tail
  // create a variable called next
  // create a variable called prev
  // create a variable called node and initialize it to the head property
  // loop through the list
  // set newt to be the next property on to wathever prev is
  // set prev to be the value of the node variable
  // set the node variable to be the value of the next variable
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null; // we want the tail.next to be null
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
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
console.log(list.set(2, "actually, not leaving"));
console.log(list.insert(1, "inserted node"));
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(list.get(3));
console.log(list.remove(1));
console.log(list.reverse());

console.log(list);
console.log(list.length);
