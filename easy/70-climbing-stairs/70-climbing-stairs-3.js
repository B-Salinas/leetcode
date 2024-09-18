/**
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

/**
 * @param {number} n
 * @return {number}
 */

// Can I add other util functions???
function matrixMultiply(a, b) {
  return [
    [
      a[0][0] * b[0][0] + a[0][1] * b[1][0],
      a[0][0] * b[0][1] + a[0][1] * b[1][1],
    ],
    [
      a[1][0] * b[0][0] + a[1][1] * b[1][0],
      a[1][0] * b[0][1] + a[1][1] * b[1][1],
    ],
  ];
};

function matrixPower(matrix, n) {
  if (n === 1) return matrix;
  if (n % 2 === 0) {
    let half = matrixPower(matrix, n / 2);
    return matrixMultiply(half, half);
  }
  return matrixMultiply(matrix, matrixPower(matrix, n - 1));
};

// actual function for leetcode
var climbStairs = function (n) {
  if (n <= 1) return 1;
  let baseMatrix = [[1, 1],[1, 0]];
  let resultMatrix = matrixPower(baseMatrix, n - 1);
  return resultMatrix[0,0];
};

// Tuesday, September 17, 2024 @ 
// B Salinas + Claude 3.5 Sonnet
