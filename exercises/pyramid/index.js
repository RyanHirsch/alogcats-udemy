// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function generate(numSpaces, numOctothorpes) {
  const spaces = [...Array(numSpaces)].map(() => " ").join("");
  const octothorpes = [...Array(numOctothorpes)].map(() => "#").join("");
  return `${spaces}${octothorpes}${spaces}`;
}

function pyramid(n) {
  // straight loop and recursive
  const pyramidWidth = 2 * n - 1;

  for (let i = 1; i <= n; i++) {
    const spacesOneSide = n - i;
    const octothorpes = pyramidWidth - 2 * spacesOneSide;
    console.log(generate(spacesOneSide, octothorpes));
  }
}

module.exports = pyramid;

// function pyramid(n) {
//   // straight loop and recursive
//   const pyramidWidth = 2 * n - 1;

//   for (let i = 1; i <= n; i++) {
//     const spacesOneSide = n - i;
//     const octothorpes = pyramidWidth - 2 * spacesOneSide;
//     console.log(generate(spacesOneSide, octothorpes));
//   }
// }
