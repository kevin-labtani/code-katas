// Merge function
// given two sorted arrays which are sorted, this helper function create a new array which is alsos orted, and consists of all the elements in the two input arrays
// this function run in O(N+M) time and space and doesn't modify the parameters passed to it// Merge function from earlier
// PSEUDO CODE
// create an empty array, take a look at the smallest values in each input array
// while there are still values we haven't looked at:
//    if the value in the first array is smaller than the value in the second array, push the value in the first array into our result and move on to the next value in the first array
//    If the value in the first array is LARGER than the value in the second array, push the value in the second array into our result and move on to the next value in the second array
//    once we exhaust one array, push in all the remaining values from the other array
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// Recrusive Merge Sort
// PSEUDO CODE
// break up the array into halves until you have arrays that are empty or have one element
// once you have smaller sorted arrays, merge those arrays with other sorted arrays until you're back at the full length of the array
// once the array has been merged back together, return the merged (and sorted!) array
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([24, 10, 76, 73]));
