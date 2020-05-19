// BASIC HASH FUNTION
// works with strings only
// not constant time,d epends on length of the string
// not that random
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

console.log(hash("pink", 11));
console.log(hash("maroon", 11));
console.log(hash("blue", 11));
console.log(hash("purple", 11));


// BETTER HASH
function betterHash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

console.log(betterHash("pink", 10));
console.log(betterHash("maroon", 10));
console.log(betterHash("mauve", 10));
console.log(betterHash("purple", 10));