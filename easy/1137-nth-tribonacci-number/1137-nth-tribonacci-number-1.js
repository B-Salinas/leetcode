/**
 The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.
 */

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (n == 0) return 0; // 0 index or 1st term
  if (n == 1 || n === 2) return 1; // 1 index/2 index or 2nd/3rd term

  let t0 = 0;
  let t1 = 1;
  let t2 = 1;
  let tn;

  for (let i = 3; i <= n; i++) {
    let tn = t0 + t1 + t2;
    t0 = t1;
    t1 = t2;
    t2 = tn;
  }

  return t2;
  
};

// comments I had on leetcode 
/**
  // hash maps
  // memoization
  // recursion

  // notes:
  // tabulation = stored in a table (pivot almost)
  // memoization = stored in memory

  // actual sequence
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, ... infinity
  
  // TIME LIMIT EXCEEDED

  // 3x3 matrix, I just wouldn't know what it looks like
 */