# 1. Two Sum
`Array` `Hash Table`

Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`._

You may assume that each input would have **_exactly_ one solution**, and you may not use the _same_ element twice.

You can return the answer in any order.

### Constraints
- `2 <= nums.length <= 10^4^`
- `-10^9^ <= nums[i] <= 10^9^` 
- `-10^9^ <= target <= 10^9^`
- **Only one valid answer exists.**

### Examples

##### Example 1
Input: `nums = [2,7,11,15]`, `target = 9`  
Output: `[0,1]`  
Explanation: Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.  

##### Example 2:
Input: `nums = [3,2,4]`, `target = 6`  
Output: `[1,2]`  
Explanation: Because `nums[1] + nums[2] = 6`, we return `[1,2]`.

##### Example 3:
Input: `nums = [3,3]`, `target = 6`
Output: [0,1]
Explanation:  Because `nums[0] + nums[1] = 6`, we return `[0,1]`.

> Can you come up with an algorithm that is less than `O(n^2^)` time complexity? 



# Submissions


### [Submission 1](/easy/1-two-sum/1-two-sum-1.js)

Runtime: 103 ms | Beats 32.93%  
Memory: 49.78 MB | Beats 63.84%

- Brute force approach with `O(n^2)` time complexity.

### [Submission 2](/easy/1-two-sum/1-two-sum-2.js)

Runtime: 56 ms | Beats 79.95%  
Memory: 51.62 MB | Beats 21.51%

- Used a single pass hash table approach to get `O(n)` time complexity.

### [Submission 3](/easy/1-two-sum/1-two-sum-3.js)

Runtime: 60 ms | Beats 67.98%  
Memory: 52.35 MB | Beats 7.48%

- Sorted array first to get `O(n log n)` time complexity. Used a two pointer approach to find the solution.
