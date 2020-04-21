// the function accepts an array and a value
// create a left pointer at the start of the array, and a right ppointer at the end of the array
// while the left pointer comes before the right pointer :
//    create a pointer in the middle
//    if you find the value you want, return the index
//    if the value is too small, move the left pointer up
//    if the value is too large, move the right pointer down
// if you never find the value, return -1

function binarySearch(array, value) {
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor((right + left) / 2);
  while (array[middle] !== value && left <= right) {
    if (value < array[middle]) {
      // - 1 because the last element was the middle and was already checked so it's redundant to include it again
      right = middle - 1;
    } else {
      left = middle + 1;
    }

    middle = Math.floor((right + left) / 2);
  }

  return array[middle] === value ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2), 1);
console.log(binarySearch([1, 2, 3, 4, 5], 3), 2);
console.log(binarySearch([1, 2, 3, 4, 5], 6), -1);
