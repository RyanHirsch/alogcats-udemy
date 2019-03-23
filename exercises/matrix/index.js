// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const final = [];
  for(let i = 0; i < n; i++) {
    final.push(new Array(n));
  }
  let tr = n - 1; //column
  let tl = 1; // row
  let br = n - 1; // row
  let bl = 0; // column
  let col = 0;
  let row = 0;
  let dir = 'r';

  for(let i = 1; i <= n * n; i++) {
    final[row][col] = i;
    switch(dir) {
      case "r":
        if(col + 1 <= tr) { // col
          col++;
        }
        else {
          dir = "d";
          row++;
          tr--;
        }
        break;
      case "l":
        if(col - 1 >= bl) { // col
          col--;
        }
        else {
          dir = "u";
          row--;
          bl++;
        }
        break;
      case "d":
        if(row + 1 <= br) { // row
          row++;
        }
        else {
          dir = "l";
          col--;
          br--;
        }
        break;
      case "u":
      if(row - 1 >= tl) { // row
        row--;
      }
      else {
        dir = "r";
        col++;
        tl++;
      }
      break;
    }
  }
  return final;
}

module.exports = matrix;
