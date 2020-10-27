// an integer on the standard input and returns a list of integers (ObjC: array of NSNumbers representing integers). That list contains the prime factors in numerical sequence.

// Examples
// 1  ==>  []
// 3  ==>  [3]
// 8  ==>  [2, 2, 2]
// 9  ==>  [3, 3]
// 12 ==>  [2, 2, 3]

prime_factors = (n) => {
  let factors = [];
  for (let index = 2; n > 1; index++) {
    while (n % index === 0) {
      factors.push(index);
      n = n / index;
    }
  }
  return factors;
};

console.log(prime_factors(1), []);
console.log(prime_factors(10), [2, 5]);
console.log(prime_factors(8), [2, 2, 2]);

// replace inner while with a for
// prime_factors = function (n) {
//   var res = [];
//   for (var i = 2; i <= n; ++i) {
//     for (; n % i == 0; n /= i) res.push(i);
//   }
//   return res;
// };
