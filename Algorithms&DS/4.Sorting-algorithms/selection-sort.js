// store the fist eleemnt as the smallest value you've seen so far
// compare this item to the next item in the array until you find a smaller number
// if a smaller number is found, and continue until the end of the array
// if the minimum is not the value (index) you initially began with, swap the two values
// repeat this with the next element until the array is sorted

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
