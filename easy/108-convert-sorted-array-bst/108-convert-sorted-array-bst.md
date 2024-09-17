# 108. Convert Sorted Array to Binary Search Tree

Given an integer array `nums` where the elements are sorted in **ascending order**, convert _it to a
**height-balanced** binary search tree._

(A **height-balanced** binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.)

---

### [✨ Submission 1](/easy/108-convert-sorted-array-bst/108-convert-sorted-array-bst-1.js)

Runtime: 58 ms | Beats 90.13%  
Memory: 52.52 MB | Beats 68.46%  

- Used recursion to find the middle element of the subarray and construct the left and right subtrees, while ensuring tree is height-balanced.
