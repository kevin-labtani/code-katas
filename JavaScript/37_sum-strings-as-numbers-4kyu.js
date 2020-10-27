// Adding Big Numbers is a copy of this kata

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a, b) {
  let res = "";
  let extraTen = 0;
  if (b.length > a.length) {
    [a, b] = [b, a];
  }
  // pad with 0
  b = b.padStart(a.length, "0");

  for (let i = a.length - 1; i >= 0; i--) {
    let c = +a[i] + +b[i] + extraTen;
    if (c > 9) {
      extraTen = 1;
      res = c - 10 + res;
    } else {
      extraTen = 0;
      res = c + res;
    }
  }
  if (extraTen) res = "1" + res;
  if (res[0] === "0") res = res.slice(1); //edge case in tests
  return res;
}

console.log(sumStrings("123", "456"), "579");
console.log(sumStrings("800", "9567"), "10367");
console.log(sumStrings("99", "1"), "100");
console.log(sumStrings("00103", "08567"), "8670");
