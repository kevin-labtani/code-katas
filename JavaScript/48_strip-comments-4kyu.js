// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
  arr = [];
  for (let i = 0; i < markers.length; i++) {
    arr = input.split(markers[i]);
    arr[0] = arr[0].trim();
    arr[1] = arr[1].slice(arr[1].indexOf("\n")).trim();
    input = arr[0] + "\n" + arr[1] + "\n"; // since we look for indexOf("\n")
  }
  return input.trim()
}

console.log(solution("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne"));
console.log(
  solution(
    "apples, plums % and bananas\npears\noranges !applesauce",
    ["%", "!"],
    "apples, plums\npears\noranges"
  )
);

// alt solution
// function solution(input, markers) {
//   return input.replace(
//     new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"),
//     "$1"
//   );
// }


// function solution(input, markers) {
//   return input
//     .split("\n")
//     .map(line =>
//       markers.reduce((line, marker) => line.split(marker)[0].trim(), line)
//     )
//     .join("\n");
// }