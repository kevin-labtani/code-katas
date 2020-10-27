// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

function anagrams(word, words) {
  let ansArr = [];
  word = sort(word);
  words.forEach(el => {
    let comp = sort(el);
    if (comp === word) ansArr.push(el);
  });
  return ansArr;
}

function sort(w) {
  return w
    .split("")
    .sort()
    .join("");
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); //=> ['aabb', 'bbaa']
console.log(anagrams("laser", ["lazing", "lazy", "lacer"])); // []

// alt solution
// String.prototype.sort = function() {
//   return this.split("")
//     .sort()
//     .join("");
// };

// function anagrams(word, words) {
//   return words.filter(function(x) {
//     return x.sort() === word.sort();
//   });
// }
