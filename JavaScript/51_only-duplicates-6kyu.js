// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"

function onlyDuplicates(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str.indexOf(str[i]) != str.lastIndexOf(str[i])
      // str.substring(0, i).includes(str[i]) ||
      // str.substring(i + 1).includes(str[i])
    ) {
      res += str[i];
    }
  }
  return res;
}

console.log(onlyDuplicates("abccdefee"), "cceee");
console.log(onlyDuplicates("hello"), "ll");
console.log(onlyDuplicates("colloquial"), "ollol");
console.log(onlyDuplicates("foundersandcoders"), "ondersndoders");

// alt solution
// function onlyDuplicates(str) {
//   return str
//     .split("")
//     .filter((e) => str.indexOf(e) != str.lastIndexOf(e))
//     .join("");
// }
