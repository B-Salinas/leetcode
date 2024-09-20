/**
 The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.
 */

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let memo = {};

  function trib(n) {
    if (n in memo) return memo[n];
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    memo[n] = trib(n - 1) + trib(n - 2) + trib(n - 3);
    return memo[n];
  }

  return trib(n);
};

// Friday, September 20, 2024 @ 4:01 AM CST
// B Salinas + Claude 3.5 Sonnet
