// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const arr = [];
  let i = 0;
  while (i < array.length) {
    arr.push(array.slice(i, i + size));
    i = i + size;
  }
  return arr;
}

module.exports = chunk;

// Native JS via slice
// function chunk(array, size) {
//   const arr = [];
//   for (let i = 0; i < array.length; i += size) {
//     arr.push(array.slice(i, i + size));
//   }
//   return arr;
// }

// Native JS via slice while
// function chunk(array, size) {
//   const arr = [];
//   let i = 0;
//   while (i < array.length) {
//     arr.push(array.slice(i, i + size));
//     i = i + size;
//   }
//   return arr;
// }

// Multiple loops
// function chunk(array, size) {
//   const arr = [];
//   for (let i = 0; i < array.length; i += size) {
//     const subArr = [];
//     for (let k = 0; k < size && i + k < array.length; k++) {
//       subArr.push(array[i + k]);
//     }
//     arr.push(subArr);
//   }
//   return arr;
// }

// Single loop with last item reference
// function chunk(array, size) {
//   const arr = [];
//   let window = [];
//   for (let i = 0; i < array.length; i++) {
//     if (i !== 0 && i % size === 0) {
//       arr.push(window);
//       window = [];
//     }
//     window.push(array[i]);
//   }
//   if (window.length > 0) {
//     arr.push(window);
//   }
//   return arr;
// }

// Single loop with last item fetch
// function chunk(array, size) {
//   const arr = [[]];
//   for (let i = 0; i < array.length; i++) {
//     let lastChunk = arr[arr.length - 1];
//     if (lastChunk.length < size) {
//       lastChunk.push(array[i]);
//     } else {
//       arr.push([array[i]]);
//     }
//   }
//   return arr;
// }

// Single loop with last item fetch alternative
// function chunk(array, size) {
//   const arr = [];

//   function getLastChunk() {
//     if (arr.length === 0) {
//       return null;
//     }
//     return arr[arr.length - 1];
//   }
//   for (let i = 0; i < array.length; i++) {
//     let lastChunk = getLastChunk();
//     if (!lastChunk || lastChunk.length === size) {
//       arr.push([array[i]]);
//     } else {
//       lastChunk.push(array[i]);
//     }
//   }
//   return arr;
// }

// For of with last item fetch alternative
// function chunk(array, size) {
//   const arr = [];

//   function getLastChunk() {
//     if (arr.length === 0) {
//       return null;
//     }
//     return arr[arr.length - 1];
//   }
//   for (const item of array) {
//     const lastChunk = getLastChunk();
//     if (!lastChunk || lastChunk.length === size) {
//       arr.push([item]);
//     } else {
//       lastChunk.push(item);
//     }
//   }
//   return arr;
// }
