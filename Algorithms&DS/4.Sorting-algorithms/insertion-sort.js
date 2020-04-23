// start by picking the second element of the array
// now compare the second element with the one before it and swap if necesssary
// continue to the next element if it is in the incorrect order, iterate through the sorted portion (ie the left side) to place the elemnt in the correct place
// repeat until the array is sorted

function insertionSort(arr) {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      // left part is already sorted
      arr[j + 1] = arr[j]; // arr[i] saved in currentVal so we don't need to do a swap here
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
