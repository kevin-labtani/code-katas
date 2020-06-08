function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10)) //55
console.log(fib(20)) //6765 /!\ starting to take alot of time

// time complexity is about O(2^N) which is really bad see memoized version for a better solution