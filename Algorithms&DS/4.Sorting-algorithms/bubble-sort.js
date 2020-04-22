// start looping from the end of the array towards the beginning with a variable called i
// start an inner loop with a variable called j from the beginning until i-1
// if arr[i] > arr[j], swap the two values.

// correction
function bubbleSort(arr) {
  // short circuit the code with a noSwap variable, if the algo didn't swap in a loop it means the data is already entirerly sorted
  let noSwaps;
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true; // assume there will be no swap
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false; // we do a swap
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([3, 2, 1, 5, 4]));
// console.log(bubbleSort([1, 2, 3, 4, 5]));

// my try
// const bubbleSort = (arr) => {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   for (let i = arr.length - 1; i >= 0; i--) {
//     for (let j = 0; j <= i - 1; j++) {
//       if (arr[i] < arr[j]) {
//         swap(arr, i, j);
//       }
//     }
//   }
//   return arr;
// };
