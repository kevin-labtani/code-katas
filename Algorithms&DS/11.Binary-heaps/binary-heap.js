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