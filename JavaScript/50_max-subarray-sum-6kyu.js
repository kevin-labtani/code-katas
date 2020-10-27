// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

function maxSequence(arr) {
  let max_sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let current_sum = 0;
    for (let j = i; j < arr.length; j++) {
      current_sum += arr[j];
      if (current_sum > max_sum) {
        max_sum = current_sum;
      }
    }
  }
  return max_sum;
}

console.log(maxSequence([]), 0);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);

// alt solution
// var maxSequence = function (arr) {
//   var max = 0;
//   var cur = 0;
//   arr.forEach(function (i) {
//     cur = Math.max(0, cur + i);
//     max = Math.max(max, cur);
//   });
//   return max;
// };