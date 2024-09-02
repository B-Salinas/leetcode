/** 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const sortedNums = nums
    .map((num, index) => ({ num, index }))
    .sort((a, b) => a.num - b.num);
  let left = 0;
  let right = sortedNums.length - 1;

  while (left < right) {
    const sum = sortedNums[left].num + sortedNums[right].num;
    if (sum === target) {
      return [sortedNums[left].index, sortedNums[right].index];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

// Monday, September 2, 2024 at 7:12 AM CST
// B Salinas + Cursor + Claude 3.5 Sonnet
