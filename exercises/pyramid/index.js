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

function generate(totalSteps, thisStep = 0, stair = "") {
  const pyramidWidth = 2 * totalSteps - 1;
  const mid = Math.floor(pyramidWidth/2);

  if(thisStep >= totalSteps) {
    return;
  }

  if(stair.length === pyramidWidth) {
    console.log(stair);
    return generate(totalSteps, thisStep + 1);
  }

  if(stair.length >= mid - thisStep && stair.length <= thisStep + mid) {
    return generate(totalSteps, thisStep, stair + "#");
  }
  return generate(totalSteps, thisStep, stair + " ");
}

function pyramid(n) {
  generate(n);
}

module.exports = pyramid;


pyramid(3)

// function generate(numSpaces, numOctothorpes) {
//   const spaces = [...Array(numSpaces)].map(() => " ").join("");
//   const octothorpes = [...Array(numOctothorpes)].map(() => "#").join("");
//   return `${spaces}${octothorpes}${spaces}`;
// }

// function pyramid(n) {
//   // straight loop and recursive
//   const pyramidWidth = 2 * n - 1;

//   for (let i = 1; i <= n; i++) {
//     const spacesOneSide = n - i;
//     const octothorpes = pyramidWidth - 2 * spacesOneSide;
//     console.log(generate(spacesOneSide, octothorpes));
//   }
// }


// function generate(totalSteps, thisStep = 0, stair = "") {
//   const pyramidWidth = 2 * totalSteps - 1;

//   if(thisStep >= totalSteps) {
//     return;
//   }

//   if(stair.length === pyramidWidth) {
//     console.log(stair);
//     return generate(totalSteps, thisStep + 1);
//   }

//   if(stair.length < totalSteps - thisStep - 1) {
//     return generate(totalSteps, thisStep, stair + " ");
//   }
//   if(stair.length < totalSteps + thisStep) {
//     return generate(totalSteps, thisStep, stair + "#");
//   }
//   return generate(totalSteps, thisStep, stair + " ");
// }

// function pyramid(n) {
//   generate(n);
// }
