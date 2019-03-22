// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function buildMap(string) {
  const charMap = new Map();
  for (const c of string.replace(/[^\w]/g, "").toLowerCase()) {
    charMap.set(c, charMap.get(c) + 1 || 1);
  }
  return charMap;
}

function anagrams(stringA, stringB) {
  const aMap = buildMap(stringA);
  const bMap = buildMap(stringB);

  if (aMap.size !== bMap.size) {
    return false;
  }

  for (const char of aMap.keys()) {
    if (aMap.get(char) !== bMap.get(char)) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   function buildMap(string) {
//     const charMap = new Map();
//     for (const c of string.toLowerCase()) {
//       if (/[a-z]/.test(c)) {
//         charMap.set(c, charMap.get(c) + 1 || 1);
//       }
//     }
//     return charMap;
//   }

//   const aMap = buildMap(stringA);
//   const bMap = buildMap(stringB);

//   if (aMap.size !== bMap.size) {
//     return false;
//   }

//   for (const char of aMap.keys()) {
//     if (aMap.get(char) !== bMap.get(char)) {
//       return false;
//     }
//   }
//   return true;
// }

// Alt regex
// function anagrams(stringA, stringB) {
//   function buildMap(string) {
//     const charMap = new Map();
//     for (const c of string.replace(/[^\w]/g, "").toLowerCase()) {
//       charMap.set(c, charMap.get(c) + 1 || 1);
//     }
//     return charMap;
//   }

//   const aMap = buildMap(stringA);
//   const bMap = buildMap(stringB);

//   if (aMap.size !== bMap.size) {
//     return false;
//   }

//   for (const char of aMap.keys()) {
//     if (aMap.get(char) !== bMap.get(char)) {
//       return false;
//     }
//   }
//   return true;
// }
