# 108. Convert Sorted Array to Binary Search Tree

**Easy**

Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

---

```js
function bst_maker(nums) {
  let nums = [];

  // 1. parse thru nums array
  //  - Remember, they are already sorted in ascending order
  // 2. Convert to binary tree

  // parsing through nums array would take O(n) at the very least
  // can we get O(log(n)) time? I don't think so bc that would be
  // going throught at least half of them, when we need all
}
```

After working with Alex and Jesse, they used recursion to solve this. They used a start and an end and updated the middle's left and right with each recursive pass. It was really cool to see how they think!

---

Worked on Wed. Jun 21, 2023.
