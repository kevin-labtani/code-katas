// given a sorter array ofintegers, determine if there's a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    // console.log(avg);
    if (avg === target) {
      // return [arr[left], arr[right]];
      return true;
    } else if (avg > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5), true);
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1), false);
