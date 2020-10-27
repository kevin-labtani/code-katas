// You are given three piles of casino chips: white, green and black chips:

// the first pile contains only white chips
// the second pile contains only green chips
// the third pile contains only black chips
// Each day you take exactly two chips of different colors and head to the casino. You can chose any color, but you are not allowed to take two chips of the same color in a day.

// You will be given an array representing the number of chips of each color and your task is to return the maximum number of days you can pick the chips. Each day you need to take exactly two chips.

function solve(arr) {
  let days = 0;
  while (true) {
    arr = arr.sort((a, b) => a - b);
    if (arr[1] > 0 && arr[2] > 0) {
      arr[1]--;
      arr[2]--;
      days++;
    } else if (arr[0] > 0 && arr[2] > 0) {
      arr[0]--;
      arr[2]--;
      days++;
    } else {
      console.log(arr);
      return days;
    }
  }
}
// not fast enough, it fails

console.log(solve([1, 1, 1]), 1);
console.log(solve([1, 2, 1]), 2);
console.log(solve([4, 1, 1]), 2);
console.log(solve([8, 2, 8]), 9);
console.log(solve([8, 1, 4]), 5);
console.log(solve([7, 4, 10]), 10);
console.log(solve([12, 12, 12]), 18);
console.log(solve([1, 23, 2]), 3);

// alt solution
// solve = ([a, b, c]) => Math.min(a + b, a + c, b + c, ((a + b + c) / 2) | 0);