// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// function score(dice) {
//   let set = new Set(dice);
//   let obj = {};
//   for (let value of set) {
//     let counter = 0;
//     dice.forEach(element => {
//       if (element === value) {
//         counter++;
//       }
//     });
//     obj[value] = counter;
//   }
//   return obj;
// }

function score(dice) {
  let total = 0;
  let obj = {};
  dice.forEach(el => {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });

  for (let key of Object.keys(obj)) {
    if (obj[key] >= 3) {
      if (key == 1) {
        total += 1000;
      } else {
        total += key * 100;
      }
      obj[key] -= 3;
    }

    if (key == 5) {
      total += obj[key] * 50;
    }

    if (key == 1) {
      total += obj[key] * 100;
    }
  }

  return total;
}

console.log(score([2, 3, 4, 6, 2]), "0");

console.log(score([4, 4, 4, 3, 3]), "400");

console.log(score([2, 4, 4, 5, 4]), "450");
console.log(score([2, 1, 1, 5, 1]), "1050");
console.log(score([1, 1, 1, 5, 1]), "1150");
