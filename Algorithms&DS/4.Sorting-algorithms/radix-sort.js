// HELPER METHODS

// returns the digit in num at the given place (i) value
// getDigit(12345, 1) // 4
// only works for base 10 numbers
// getDigit(7323, 2) will divide 7323 per 100 (=73.23), take the floor (73), take the modulo 10 and return 3
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// figure out how many digits are in a num
// convert to string and find the length is anothe roption
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// figure out the largest number of digits in the list of nums
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// PSEUDO CODE
// defiena function that accepts a list of numbers
// figure out how many digits the largest number has
// loop from k=0 to to this largest number of digits
// for each iteration of the loop:
//    create buckets for each digits (0 to 9)
//    place each number in the corresponding bucket based on its kth digit
// replace our existing array with values in our buckets, starting with 0 and going up to 9
// return the list at the end

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
