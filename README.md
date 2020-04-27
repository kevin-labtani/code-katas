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
