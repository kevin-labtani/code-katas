function sumRange(num) {
  // base case
  if (num === 1) return 1;
  // recursive call with different input
  return num + sumRange(num - 1);
}

console.log(sumRange(4));
