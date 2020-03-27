// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = str.match(/[aeuio]/g);

  return vowelsCount ? vowelsCount.length : 0;
}

console.log(getCount("abracadabra"), 5);
console.log(getCount("my pyx"), 0);

// alt solution
// function getCount(str) {
//   return (str.match(/[aeiou]/gi) || []).length;
// }