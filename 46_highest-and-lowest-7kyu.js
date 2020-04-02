// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  let arr = numbers.split(" ");
  arr.sort((a, b) => b - a);
  arr
  return arr[0] + " " + arr[arr.length - 1];
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");

// alt solution
// function highAndLow(numbers) {
//   numbers = numbers.split(" ");
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }