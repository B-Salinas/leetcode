# 1. Two Sum

Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.

You may assume that each input would have **\*exactly** one solution*, and you may not use the *same\* element twice.

You can return the answer in any order.

---

### [Submission 1](/easy/1-two-sum/1-two-sum-1.js)

Runtime: 103 ms | Beats 32.93%  
✨ Memory: 49.78 MB | Beats 63.84%

- Brute force approach with `O(n^2)` time complexity..

### [Submission 2](/easy/1-two-sum/1-two-sum-2.js)

✨ Runtime: 56 ms | Beats 79.95%  
Memory: 51.62 MB | Beats 21.51%

- Used a single pass hash table approach to get `O(n)` time complexity.

### [Submission 3](/easy/1-two-sum/1-two-sum-3.js)

Runtime: 60 ms | Beats 67.98%  
Memory: 52.35 MB | Beats 7.48%

- Sorted array first to get `O(n log n)` time complexity. Used a two pointer approach to find the solution.
