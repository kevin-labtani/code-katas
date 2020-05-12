// implement stack from singly linked list using push() and shift()  (constant time)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // ENQUEUE
  // functiona ccepts some value
  // create a new node usign that value
  // if there are no node in the queue set this node to be the first and last property of the queue
  //  otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
  // inc the size by one and return it
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  // DEQUEUE
  // if there is no first property, return null
  // create a temp variable to store the first property
  // if there is only one node, set the first and last property to be null
  // if there is more than one node, set the first property to be the next property on the current first
  // decrement the size by 1
  // return the value of the node dequeued
  dequeue() {
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

let queue = new Queue();
queue.enqueue("33");
queue.enqueue("44");
console.log(queue);
queue.dequeue();
console.log(queue);
