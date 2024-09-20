/**
 The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
 */

/**
 * @param {number} n
 * @return {number}
 */

var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let f0 = 0;
  let f1 = 1;
  let fn;

  for (let i = 2; i <= n; i++) {
    let fn = f0 + f1;
    f0 = f1;
    f1 = fn;
  }

  return f1;
};

// Wednesday, September 18, 2024 @ 3:27 PM CST
// B Salinas + Claude 3.5 Sonnet
