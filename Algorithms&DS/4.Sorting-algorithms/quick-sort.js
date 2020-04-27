// Pivot function
// given an array, this helper function should designate an eleemnt as the pivot
// it should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot and all values grater than the pivot are moved to the right of the pivot
// the order of elements on either side of the pivot doesn't matter
// the helper should dmo ths in place, that is, it should not create a new array
// when complete, the helper should return the index of the pivot
// NOTES
// the runtime of quick sort depends in part how one selects the pivot
// ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
// for simplicity, we'll always choose the pivot to be the first element
// PSEUDO CODE
// write a function that accepts three arguments: an array, a start index, and an end iddex (there can default to 0 and the array length minus one)
// grab the pivot form the start of the array
// store the current pivot index ina  variable (this will keep track of where the pivot should end up)
// loop through the array from the start until the end
// loop through the arary from the start until the end
//    if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// swap the starting element (ie the pivot) with the pivot index
// return the pivot index
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint and return the index
  swap(arr, start, swapIdx);
  return swapIdx;
}

// PSEUDO CODE
// call te pivot helper on the array
// when the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
// nb: it's all happening in place
// the base case occurs when we consider a subarray with less than 2 elements
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) { // we've hit a subarray that's one element long when left = right
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1
