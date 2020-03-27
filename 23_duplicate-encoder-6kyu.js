// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  let lowerWd = word.toLowerCase();
  let arr = lowerWd.split("");
  let res = "";
  let popped = [];
  while (arr.length > 0) {
    let next = arr.shift();
    if (arr.includes(next) || popped.includes(next)) {
      res += ")";
    } else {
      res += "(";
    }
    popped.push(next);
    console.log(arr, popped, res);
  }
  return res;
}

console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())", "should ignore case");
console.log(duplicateEncode("(( @"), "))((");

// alt solution
// function duplicateEncode(word) {
//   var unique = "";
//   word = word.toLowerCase();
//   for (var i = 0; i < word.length; i++) {
//     if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
//       unique += "(";
//     } else {
//       unique += ")";
//     }
//   }
//   return unique;
// }