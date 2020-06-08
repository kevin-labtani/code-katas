function fibonacci(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;
  let res = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  memo[n] = res;
  return res;
}

console.log(fibonacci(70));
console.log(fibonacci(60));
console.log(fibonacci(50));

// alt
// tabulation is bottom up, memoization is top down
// function fib(n) {
//   if (n <= 2) return 1;
//   let fibNums = [0, 1, 1];
//   for (let i = 0; i < n; i++) {
//     fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
//   }
//   return fibNums[n]
// }