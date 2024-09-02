/** 
Given an integer array `nums` where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

(A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.)
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;

  function convert(left, right) {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[mid]);

    node.left = convert(left, mid - 1);
    node.right = convert(mid + 1, right);

    return node;
  }

  return convert(0, nums.length - 1);
};

// Monday, September 2, 2024 at 8:21 AM CST
// B Salinas + Cursor + Claude 3.5 Sonnet
