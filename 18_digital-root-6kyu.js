// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(num) {
  while (num >= 10) {
    let numArr = num.toString().split("");

    numArr = numArr.map(Number);
    num = numArr.reduce((acc, res) => (acc += res));
    // num = numArr.reduce((acc, res) => acc + +res, 0); // replace both lines
  }
  return num;
}

console.log(digital_root(16), 7);
console.log(digital_root(456), 6);
console.log(digital_root(493193), 2);

// alt answer
// function digital_root(n) {
//   return ((n - 1) % 9) + 1;
// }
