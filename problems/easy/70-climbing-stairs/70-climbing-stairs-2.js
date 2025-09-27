/**
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {

  const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  const psi = (1 - sqrt5) / 2;

  return Math.round((Math.pow(phi, n + 1) - Math.pow(psi, n + 1)) / sqrt5 );
};

// Tuesday, September 17, 2024 @ 7:48 AM CST
// B Salinas + Claude 3.5 Sonnet
