// Write a function "same" which accepts thwo arrays. Te function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values should be the same.

// naive solution time complexity O(N^2) due to the for loop & indexOf
// function same(arr1, arr2) {
//   if (!arr1 || !arr2) {
//     return false;
//   }

//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// refactored with frequency counter pattern time complexity O(N) (~3N, one ofr each loop)
// instead of looping over the 1st array and checking for each value in a sub-loop over the second array, we loop over each array one time individually
function same(arr1, arr2) {
  if (!arr1 || !arr2) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false (need same frequency)
console.log(same([2, 2, 3], [(4, 9, 9)])); // false (need same frequency)
console.log(
  same(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [
      11 * 11,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ]
  )
); // true
console.log(same([2, 2, 3], [4, 4, 9])); // true
console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // true
