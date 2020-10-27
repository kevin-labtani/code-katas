// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers) {
  let odd = [];
  let even = [];
  integers.forEach(el => {
    el % 2 === 0 ? even.push(el) : odd.push(el);
  });
  return odd.length === 1 ? odd[0] : even[0];
}

console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([0, 0, 3, 0, 0]), 3);
console.log(findOutlier([1, 1, 0, 1, 1]), 0);

// alt solution
// function findOutlier(int) {
//   var even = int.filter(a => a % 2 == 0);
//   var odd = int.filter(a => a % 2 !== 0);
//   return even.length == 1 ? even[0] : odd[0];
// }