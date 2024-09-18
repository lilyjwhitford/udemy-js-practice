"use strict";

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// };

// console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
  // return retirement age
  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "jonas"));
console.log(yearsUntilRetirement(1950, "mike"));
