// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
function sumIntervals(intervals) {
  let arr = [];
  intervals.forEach(interval => {
    for (let i = interval[0]; i < interval[1]; i++) {
      if (!arr.includes(i)) {
        arr.push(i)
      }
    }
  });
  return arr.length
}

console.log(sumIntervals([[1, 5]]), 4);
console.log(
  sumIntervals([
    [1, 5],
    [6, 10]
  ]),
  8
);

console.log(
  sumIntervals([
    [1, 5],
    [1, 5]
  ]),
  4
);
console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5]
  ]),
  7
);
