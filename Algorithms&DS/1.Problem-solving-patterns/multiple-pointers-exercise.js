// Implement a function called countUniqueValues, which accept a sorted array, and counts the unique values in the array. There can be negative number in the array, but it will always be sorted.

// naive
function countUniqueValues(arr) {
  let set = new Set(arr);
  return set.size;
}

// multiple pointers with time complexity O(N) and space complexity O(1)
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 2]), 2);
console.log(countUniqueValues([1, 1, 1, 1]), 1);
console.log(countUniqueValues([]), 0);
console.log(countUniqueValues([1, 2, 2, 3, 4, 5]), 5);
console.log(countUniqueValues([-2, -1, -1, 0, 1]), 4);
