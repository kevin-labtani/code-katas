class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // INSERT
  // push the value into the values property on the heap
  // bubble up:
  //    create a variable called index which is the length of the values property - 1
  //    create a variable called parentIndex which is the floor or (index-1)/2
  //    keep looping as long as the values element at the parentIndex is less than the values eleemnt at the child index
  //        swap the value of the values element at the parentIndex with the value of the elemnt as the child index
  //        set the index to be the parentIndex, adn start over
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // REMOVE (we typically remove the root and then sink down)
  // swap the first value in the values property with the last one
  // pop form the values property so you can return the value at the end
  // have the new root "sink down" to the correct spot:
  //    your parentindex starts at 0 (the root)
  //    find the index of the left child 2*index + 1 (make sure it's within bounds)
  //    find the index of the right child 2*index + 2 (make sure it's within bounds)
  //    if either child is greater than the element, swap; if both are larger, swap the largest
  //    the child index yous wapped to now becomes the parent index
  //    keep looking and wmapping until neither child is larger than the element
  // return the old root
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChildIdx > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap);
heap.insert(3);
console.log(heap);
heap.insert(45);
console.log(heap);
heap.insert(99);
console.log(heap);
heap.extractMax();
console.log(heap);
heap.extractMax();
console.log(heap);
