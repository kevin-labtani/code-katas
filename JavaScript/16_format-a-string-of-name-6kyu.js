// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names) {
  switch (names.length) {
    case 0:
      return "";
      break;
    case 1:
      return `${names[0].name}`;
      break;
    case 2:
      return `${names[0].name} & ${names[1].name}`;
      break;
    case 3:
      return `${names[0].name}, ${names[1].name} & ${names[2].name}`;
      break;
    default:
      let firstPart = "";
      for (let index = 0; index < names.length - 2; index++) {
        firstPart += `${names[index].name}, `;
      }
      return `${firstPart}${names[names.length - 2].name} & ${
        names[names.length - 1].name
      }`;
      break;
  }
}

console.log(
  list([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
    { name: "Marge" }
  ]),
  "Bart, Lisa, Maggie, Homer & Marge"
);
console.log(
  list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]),
  "Bart, Lisa & Maggie"
);
console.log(list([{ name: "Bart" }, { name: "Lisa" }]), "Bart & Lisa");
console.log(list([{ name: "Bart" }]), "Bart");
console.log(list([]), "");

// alt solution
// function list(names) {
//   return names.reduce(function(prev, current, index, array) {
//     if (index === 0) {
//       return current.name;
//     } else if (index === array.length - 1) {
//       return prev + " & " + current.name;
//     } else {
//       return prev + ", " + current.name;
//     }
//   }, "");
// }
