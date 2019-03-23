// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoizer(fn) {
  const results = {};

  return function(...args) {
    if(results[args]) {
      return results[args];
    }

    const result = fn.apply(this, args);
    results[args] = result;
    return result;
  }
}

function fib(n) {
  if(n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2)
}

fib = memoizer(fib);

module.exports = fib;

// function fib(n) {
//   const fibSeries = [ 0, 1 ];
//   for(let i = 2; i <= n; i++) {
//     fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2])
//   }
//   return fibSeries[n];
// }

// function fib(n) {
//   const fibSeries = [ 0, 1 ];
//   while(fibSeries.length <= n) {
//     fibSeries.push(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2])
//   }
//   return fibSeries[n];
// }

// function fib(n) {
//   if(n === 0) {
//     return 0;
//   }
//   if(n === 1) {
//     return 1
//   }

//   let prev = 1;
//   let prevPrev = 0;
//   let val = 0;
//   for(let i = 1; i < n; i++){
//     val = prev + prevPrev;
//     prevPrev = prev;
//     prev = val;
//   }
//   return val;
// }

// function fib(n) {
//   if(n === 0) {
//     return 0;
//   }
//   if(n === 1) {
//     return 1
//   }

//   return fib(n - 1) + fib(n - 2);
// }
