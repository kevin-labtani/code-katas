// given two stings, write a function to determine if the second string is an anagram of the first.

// naive, sort is O(N*logN)
// function validAnagram(str1, str2) {
//   str1 = str1.split("").sort().join("");
//   str2 = str2.split("").sort().join("");
//   return str1 === str2;
// }

// frequency counter pattern
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i]; // set the letter we're currently itterating to a variable for cleaner code
    frequencyCounter[letter]
      ? (frequencyCounter[letter] += 1)
      : (frequencyCounter[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!frequencyCounter[letter]) { // !0 is true so return false
      return false;
    } else {
      frequencyCounter[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram("", ""), true);
console.log(validAnagram("rat", "car"), false);
console.log(validAnagram("aaz", "zza"), false);
console.log(validAnagram("anagram", "nagaram"), true);
console.log(validAnagram("azerty", "tryeza"), true);
console.log(validAnagram("awesomaaaaae", "awesom"), false);
