// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  if(n === row) {
    return;
  }

  if(stair.length === n) {
    console.log(stair);
    return steps(n, row + 1)
  }

  const char = stair.length <= row ? "#" : " "
  return steps(n, row, stair + char)
}

module.exports = steps;

// function steps(n, row = 0, stair = '') {
//   if(n === row) {
//     return;
//   }

//   if(stair.length === n) {
//     console.log(stair);
//     return steps(n, row + 1)
//   }
//   if(stair.length <= row) {
//     return steps(n, row, stair + "#")
//   }
//   return steps(n, row, stair + " ")
// }


// function steps(n) {
//   let steps = Array(n).fill(" ");
//   for(let i = 0; i < n; i++) {
//     steps[i] = "#";
//     console.log(steps.join(''))
//   }
// }

// function steps(n) {
//   for(let row = 0; row < n; row++) {
//     let step = "";
//     for(let col = 0; col < n; col++) {
//       if(col <= row) {
//         step += "#";
//       }
//       else {
//         step += " ";
//       }
//     }
//     console.log(step)
//   }
// }

// function steps(n) {
//   for(let i = 0; i < n; i++) {
//     console.log(`${"#".repeat(i + 1)}${" ".repeat(n - i - 1)}`)
//   }
// }

// function steps(n) {
//   let steps = `${" ".repeat(n)}`.split('');
//   for(let i = 0; i < n; i++) {
//     steps[i] = "#";
//     console.log(steps.join(''))
//   }
// }
