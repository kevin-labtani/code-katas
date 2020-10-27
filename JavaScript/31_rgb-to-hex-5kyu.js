// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b) {
  return encode(r) + encode(g) + encode(b);
}

function encode(num) {
  if (num > 255) num = 255;
  if (num < 0) num = 0;
  let firstDigit = Math.floor(num / 16)
    .toString(16)
    .toUpperCase();
  let secondDigit = (num % 16).toString(16).toUpperCase();
  return firstDigit + secondDigit;
}

console.log(rgb(0, 0, 0), "000000");
console.log(rgb(0, 0, -20), "000000");
console.log(rgb(300, 255, 255), "FFFFFF");
console.log(rgb(173, 255, 47), "ADFF2F");
