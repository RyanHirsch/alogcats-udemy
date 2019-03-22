// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

module.exports = capitalize;

// function capitalize(str) {
//   const words = str.split(" ");

//   return words
//     .map(word => {
//       const [head, ...tail] = word.split("");
//       return [head.toUpperCase(), ...tail].join("");
//     })
//     .join(" ");
// }

// function capitalize(str) {
//   const letters = str.split("");

//   for (let i = 0; i < letters.length; i++) {
//     if (i === 0 || letters[i - 1] === " ") {
//       letters[i] = letters[i].toUpperCase();
//     }
//   }
//   return letters.join("");
// }
