// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

// function vowels(str) {
//   let count = 0;
//   for(const c of str) {
//     if(/[aeiou]/i.test(c)) {
//       count += 1;
//     }
//   }
//   return count;
// }

// function vowels(str) {
//   let count = 0;
//   const vowelList = [ 'a','e','i','o','u']
//   for(const c of str) {
//     if(vowelList.includes(c.toLowerCase())) {
//       count += 1;
//     }
//   }
//   return count;
// }
