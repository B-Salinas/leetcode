# 109. Convert Sorted List to Binary Search Tree

**Medium**

Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree.

---

_**HINT:**_ Use the solution to 108 as a helper function!

```js
function bts_maker() {}
```

Jesse ran through something quick, which involved the solution for 108. It was still recursive, but I don't quite remember if we "cut" the list in half.

It definitely helps that it's sorted though!

I proposed a set when reading the data from each node, but I don't know if that could work. The only thing Jesse couldn't work out is what happens when you pass an empty `head`, as an undefined `val` will output `0` instead of `undefined` or `null` or any empty node.

---

Worked on Wed. Jun 21, 2023.