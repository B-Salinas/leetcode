/**
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  if (n <= 1) return 1; // <= which means only 0 or 1 steps taken
  if (n === 2) return 2; // other minimum number of steps, 2

  let stairsLeft;
  let oneStep = 1;
  let twoStep = 2;

  for (let i = 3; i <= n; i++) {
    let stairsLeft = oneStep + twoStep;
    let oneStep = twoStep;
    let twoStep = stairsLeft;
  }

  return stairsLeft;
};

// Tuesday, September 17, 2024 @ 7:14 AM CST
// B Salinas + Claude 3.5 Sonnet
