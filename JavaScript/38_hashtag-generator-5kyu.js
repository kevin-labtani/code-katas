// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
  if (!/\w/.test(str)) return false;
  let arr = str.split(" ");
  arr.forEach((el, i) => {
    arr[i] = el.charAt(0).toUpperCase() + el.slice(1);
  });
  let res = "#" + arr.join("");
  return res.length > 140 ? false : res;
}

console.log(
  generateHashtag(""),
  false,
  "Expected an empty string to return false"
);
console.log(generateHashtag(" ".repeat(200)), false, "Still an empty string");
console.log(
  generateHashtag("Do We have A Hashtag"),
  "#DoWeHaveAHashtag",
  "Expected a Hashtag (#) at the beginning."
);
console.log(
  generateHashtag("Codewars"),
  "#Codewars",
  "Should handle a single word."
);
console.log(
  generateHashtag("Codewars Is Nice"),
  "#CodewarsIsNice",
  "Should remove spaces."
);
console.log(
  generateHashtag("Codewars is nice"),
  "#CodewarsIsNice",
  "Should capitalize first letters of words."
);
console.log(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars");
console.log(
  generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  ),
  false,
  "Should return false if the final word is longer than 140 chars."
);
console.log(
  generateHashtag("a".repeat(139)),
  "#A" + "a".repeat(138),
  "Should work"
);
console.log(generateHashtag("a".repeat(140)), false, "Too long");
