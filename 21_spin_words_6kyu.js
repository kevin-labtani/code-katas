// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str) {
  let strArr = str.split(" ");
  let ansArr = [];
  strArr.forEach(element => {
    if (element.length >= 5) {
      ansArr.push(
        element
          .split("")
          .reverse()
          .join("")
      );
    } else {
      ansArr.push(element);
    }
  });
  return ansArr.join(" ");
}

console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
console.log(spinWords("This is another test"), "This is rehtona test");
console.log(
  spinWords("You are almost to the last test"),
  "You are tsomla to the last test"
);

// alt solution
// function spinWords(words) {
//   return words
//     .split(" ")
//     .map(function(word) {
//       return word.length > 4
//         ? word
//             .split("")
//             .reverse()
//             .join("")
//         : word;
//     })
//     .join(" ");
// }

// or
// function spinWords(string) {
//   return string.replace(/\w{5,}/g, function(w) {
//     return w
//       .split("")
//       .reverse()
//       .join("");
//   });
// }