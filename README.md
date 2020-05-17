# This repo holds my solutions to attempted [codewars](https://www.codewars.com/) katas as well as general problem solving, algo & DS stuff.

[![My codewars](https://www.codewars.com/users/kevin-labtani/badges/large)](https://www.codewars.com/users/kevin-labtani)

## Problem solving approach

An algorithm is a process or set of steps to accomplish a certain task.

### 1. Understanding the problem

1. Can I restate the problem in my own words?
1. What are the inputs that go into the problem?
1. What are the outputs that should come from the solution to the problem?
1. Can the output be determined from the inputs? That is, do I have enough information to solve the problem?
1. How should I label the important pieces of data that are a part of the problem?

### 2. Concrete examples

- Coming up with examples can help you understand the problem better
- Examples also provide sanity checks that your eventual solution works how it should
- Start with simple examples
- Progress to more complex examples
- Explore examples with empty inputs
- Explore examples with invalid inputs

### 3. Break it down

- Explicitly write out the steps you need to take.  
  This forces you to think about the code you'll write before you write ir, and helps you catch any conceptual issues or misunderstandings before you dive in and have to worry about the details

### 4. Solve or simplify

- Solve the problem if you can, and if you can't, solve a simpler problem
- To simplify:
  1. Find the core difficulty in what you'r trying to do
  2. Temporarily ignore that difficulty
  3. Write a simplified solution
  4. Then incorporate that difficulty back in

### 5. Look back and refactor

- Refactoring questions:
  - Can you check the result? (the code need to work ^^)
  - Can you derive the result differently?
  - Can ou understand it a a glance?
  - Can you use the result or method for some other problem?
  - Can you improve the performance of your solution?
  - Can you think of other ways to refactor?
  - How have other people solved this problem?

## Problem solving patterns

### Frequency counter pattern

This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or O(N^2) operations with arrays or strings.

### Multiple pointers pattern

Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition  
Very efficient for solving problems with minimal space complexity as well

### Sliding window pattern

Create a window which can either be an array or number from one position to another.  
Depending on a certain condition, the window either increases or closes (and a new window is created).  
Very useful for keeping track of a subset of data in an array/string/etc.

### Divide and conquer pattern

Divide a dataset into smaller chunks and then repeat a process with a subset of data.  
This pattern can tremendously decrease time complexity.

## Recursion

Recursion is a process (function, here) that calls itself.

### The call stack

Anytime a function is invoked it is placed (push) on the top of the callstack  
When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop) the top item of the stack. When we write recursive functions, we keep pushing new functions onto the call stack.

### How recursive functions work

Two essential parts of a recursive function:

1. The base case is the condition when the recursion ends.
2. Invoke the same function with a different input until you reach your base case!

### Common recursion pitfalls

- no base case, or base case is wrong
- forgetting to return or returning the wrong thing
- stack overflow

### Helper method recursion

A pattern where we have an outer function that's not recursive which call a recursive inner function

```js
function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}
```

We do it this way because we need to collect results in an array that's outside the recursion, if it was inside the array would be reset every time.

### Pure recursion

Alternative to helper method recursion, see example.  
For arrays, use methods like slice, spread operator and concat that make copies of arrays so you do not mutate them.

## Searching Algorithms

### Linear search

Given an array, the simplest way to serch for a value is to look at every element in the array and check if it's the value we want.  
indexOf, includes, find, findIndex are all doing this.  
Linear search is O(n)

### Binary Search

Only works on sorted array  
Rather than elinimating one element at a time, you can eliminate half of the reamining elements at a time  
We use divide and conquer; pick a pivot in the middle of the array, compare it to the value we're looking for and get rid of half the array depending on if the value ir > or < the pivot  
Binary search is O(log n)

### Naive string search

We want to count the number of times a smaller string appears in a lnger string  
A straightforward approach involves checking pairs of characters individually  
Naive string search is O(n^2)

## Basic Sorting algorithms

JavaScript built in sort method has some quirks, eg: sorting numbers like [6,4,15,10] will give us [10,15,4,6], that's because the default sort order is according to string Unicode code points. So you usually pass in a comparator function that looks at a pair of elements (a,b); if the function returns a negative number, `a` comes before `b`; if the function returns a positive number, `b` comes before `a`; if it returns 0, `a` and `b` are the same as far as the sort is concerned.

Many sorting algorithms involve some type of swapping functionality (eg. swapping two numbers to put them in order)

```js
// ES5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  add[idx2] = temp;
}
// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
```

### Bubble sort

A sorting algorithm where the largest values bubble up to the top.  
Bubble sort Time complexity is O(N^2), best case is O(N) if data almost already sorted), Space complexity is O(1)

### Selection sort

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted positions.  
Selection sort Time complexity is O(N^2) Space complexity is O(1)
Selection sort has less swaps than bubble sort, we only make 1 swap at the end of each loop

### Insertion sort

Build up the sort by gradually creating a larger left half which is always sorted  
Insertion sort Time complexity is is O(N^2), best case is O(N) Space complexity is O(1)  
If the data is "coming in"/streaming in live, because of the way that insertion sort, we can use this algo to sort the incoming data

## Intermediate Sorting algorithms

The sorting algos we've seen so far don't scale well  
There's a family of sorting algorithms that can improve time cmplexity from O(N^2) to O(N log N)

### Merge sort

It's a combination of merging and sorting  
Exploits the fact that arrays of 0 or 1 elements are always sorted  
Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array (divide & conquer)  
Time complexity (best, worst and average) is O(N log N) as we have to do log N array decomposition, and we have O(N) comparisons per decomposition; space complexity is O(N)

### Quick sort

Exploits the fact that arrays of 0 or 1 elements are always sorted  
Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array  
Time complexity is O(N log N) at best and at average, O(N^2) at worst (when the pivot chosen is the biggest or smallest element); space complexity is O(log N)

### Radix sort

So far we've seen comparison sorts algorithms that are at best O(N log N) average time complexity; can we do better than that? yes, but not by doing comparisons.  
Radix sort works on list of numbers; it never makes comparisons between elements; it exploits the fact that information about the size of a number is encoded in the number of digits, more digits means a bigger number  
Time complexity is O(NK) at best, average and worst (n is the number of numbers we're sorting, k is the length of those numbers); space complexity is O(N + K)

## Intro to data structures

Data structures are collections of vales, the relationship among them,a nd the functions or operations that can be applied to the data

### Singly Linked List

A linked list is a data structure that contains a head, tail and length property  
Linked lists consist of nodes, and each node has a value and a pointer to another node or null  
Compared with arrays:

- no indexes
- connected via nodes with a next pointer
- random access isn't allowed (need to traverse from the beginning)

Big O of Singly Linked Lists:

- insertion: O(1)
- removal: O(1) for 1st item or O(N) for last item
- searching: O(N)
- access: O(N)

Singly linked lists are excellent alternatives to arrays when insertion and deletion at the beginning are frequently required

### Doubly Linked List

Almost identital to Singly Linked Lists, except every node has another pointer, to the previous node!  
They do take up more memory considering the extra pointer

Big O of Doubly Linked Lists:

- insertion: O(1)
- removal: O(1) (always, that's a difference from singly linked list)
- searching: O(N) (O(N/2), but that's still O(N))
- access: O(N)

### Stack

A LIFO data structure  
Used for managing function invocations, for Undo/Redo, for Routing (the history object)  
Can be implemented with JS arrays (just use push() and pop() or unshift() and shift() to add and remove)  
Insertion and removal should be constant time with stacks

Big O of Stacks:

- insertion: O(1)
- removal: O(1)
- searching: O(N)
- access: O(N)

### Queues

A FIFO data structure  
Used for background tasks,uploading resources, printing / task processing
Can be implemented with JS arrays (pick between add to the beginning or the end and then use push() and shift() or unshift() and pop())  
Insertion and removal should be constant time with queues

Big O of Queues:

- insertion: O(1)
- removal: O(1)
- searching: O(N)
- access: O(N)

### Trees

A data structure that consists of nodes in a parent/child relationship  
Trees are nonlinear  
A node can only point to a child

Definitions:

- The **root** is the top node in a tree
- A **child** is a node directly connected to another node when moving away from the root
- A **parent** is the ocnverse notion of a child
- **siblings** are a group of nodes with the same parent
- A **leaf** is a node with no children
- An **edge** is the connection between one node and another

Usage:

- HTML DOM
- Network routing
- Abstract syntax tree
- Artificial intelligence
- Folders in operating systems
- JSON

### Binary Search Trees

- Every parent node has at most two children
- Every node to the left of a parent node is always less than the parent
- Every node to the right of a parent node is always greater than the parent

Big O of BST:

- insertion: O(log N) (best and average)
- searching: O(log N) (best and average)

not guaranteed though, some BST configurations are really slow (eg (3 > 17 > 19 > 32 > 34 > 63), ie only one sided tree, like a linked-list, is O(N); but really you should just restructure the tree and have 19 as the root and resort all the other values)

### Tree traversal

- Breath First Search
- Depth First Search
  - PreOrder
  - PostOrder
  - inOrder

BFS has a lof of nodes to keep track of (in the queue we use to keep track of the nodes visited), it has a bigger space complexity than DFS for big, large trees  
Time complexity is the same for BFS and DFS

DFS InOrder is used commonly with BST as it gets us the nodes in the tree in their undrelying order  
DFS PreOrder can be used to "export" a tree structure so that it is easily reconstructed or copied

### Heaps

Heaps are another category of trees  
We'll focus on Binary Heaps, they are similar to a binary search tree but with some different rules.  
In a MaxBinaryHeap, parent nodes are always larger than child nodes; in a MinBinaryHeap, parent nodes are always smaller than child nodes

**Max Binary Heap**

- each parent has at most two child nodes
- the value of each parent nodes is always greater than its child nodes
- in a max binary heap theparent is greater than the children, but there are no guarantees between siblings nodes
- a binary heap is as compact as possible; all the children of each node are as full as they can be and left children are filled out first

Binary heaps are usd to implement Priority Queues, which are very commonly used data structures  
THey're also used quite a bit with graphs traversal

We can use an array to store a binary heap  
for any index of an array _n_, the left child is stored at _2n+1_ and the right child is stored at _2n+2_  
for any child at index _n_, it's parent is at index _Math.floor((n-1)/2)_  

