// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  let frequencyCounter = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    frequencyCounter[letter]
      ? (frequencyCounter[letter] += 1)
      : (frequencyCounter[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (frequencyCounter[letter]) {
      frequencyCounter[letter] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

console.log(scramble("rkqodlw", "world"), true);
console.log(scramble("cedewaraaossoqqyt", "codewars"), true);
console.log(scramble("katas", "steak"), false);
console.log(scramble("scriptjava", "javascript"), true);
console.log(scramble("scriptingjava", "javascript"), true);
console.log(scramble("scriptsjava", "javascripts"), true);
console.log(scramble("jscripts", "javascript"), false);
console.log(scramble("aabbcamaomsccdd", "commas"), true);
console.log(scramble("scriptjavx", "javascript"), false);
console.log(scramble("javscripts", "javascript"), false);

// alt solutions
// function scramble(str1, str2) {
//   let occurences = str1.split("").reduce((arr, cur) => {
//     arr[cur] ? arr[cur]++ : (arr[cur] = 1);
//     return arr;
//   }, {});
//   return str2.split("").every((character) => --occurences[character] >= 0);
// }
