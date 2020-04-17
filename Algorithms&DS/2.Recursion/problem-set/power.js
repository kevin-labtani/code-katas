// write a function pwer which accepts a base and an exponent, mimic the functionality of Math.pow(). No negative bases or exponents.

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
