# [0109.](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/) Convert Sorted List to Binary Search Tree
`Linked List` `Divide and Conquer` `Tree` `Binary Search Tree` `Binary Tree`

Given the `head` of a singly linked list where elements are sorted in **ascending order**, convert _it to a height-balanced binary search tree_.

> A **height-balanced** binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

### Constraints
- The number of nodes in `head` is in the range <code>[0, 2 * 10<sup>4</sup>]</code>.
- <code>-10<sup>5</sup> <= Node.val <= 10<sup>5</sup></code>

### Examples

##### Example 1
> Input: `head = [-10,-3,0,5,9]`   
> Output: `[0,-3,9,-10,null,5]`  
> Explanation: One possible answer is `[0,-3,9,-10,null,5]`, which represents the shown height balanced BST.

##### Example 2
> Input: `head = []`   
> Output: `[]`  

### 💡 Hints
* Use the solution to 108 as a helper function!

# Submissions

# Other

```js
function bts_maker() {}
```

Jesse ran through something quick, which involved the solution for 108. It was still recursive, but I don't quite remember if we "cut" the list in half.

It definitely helps that it's sorted though!

I proposed a set when reading the data from each node, but I don't know if that could work. The only thing Jesse couldn't work out is what happens when you pass an empty `head`, as an undefined `val` will output `0` instead of `undefined` or `null` or any empty node.

Worked on Wed. Jun 21, 2023.
