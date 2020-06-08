// tabulation is bottom up, memoization is top down
// issue with memoized version is we'll hit stackoverflow with fib(10000), not the case here, tabulation has better space complexity
// time complexity also O(N)
function fib(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 0; i < n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n]
}

console.log(fib(10));
console.log(fib(100));
