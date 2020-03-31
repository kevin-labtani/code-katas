// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  walk = walk.join("");

  let north = walk.match(/n/gi);
  let south = walk.match(/s/gi);
  let east = walk.match(/e/gi);
  let west = walk.match(/w/gi);

  if (walk.length !== 10) return false;
  if (north && south && north.length !== south.length) return false;
  if (east && west && east.length !== west.length) return false;
  if (east && !west) return false;
  if (west && !east) return false;
  if (north && !south) return false;
  if (south && !north) return false;
  return true;
}

//some test cases for you...
console.log(
  isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
  "should return true"
);
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
  "should return false"
);
console.log(isValidWalk(["w"]), "should return false");
console.log(
  isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
  "should return false"
);
console.log(
  isValidWalk(["n", "e", "n", "e", "n", "e", "n", "e", "n", "e"]),
  "should return false"
);
console.log(
  isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
  "should return true"
);

// alt solution
// function isValidWalk(walk) {
//   var dx = 0;
//   var dy = 0;
//   var dt = walk.length;

//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case "n":
//         dy--;
//         break;
//       case "s":
//         dy++;
//         break;
//       case "w":
//         dx--;
//         break;
//       case "e":
//         dx++;
//         break;
//     }
//   }

//   return dt === 10 && dx === 0 && dy === 0;
// }
