# [2597.](https://leetcode.com/problems/the-number-of-beautiful-subsets/description/) The Number of Beautiful Subsets
`Array` `Hash Table` `Math` `Dynamic Programming` `Backtracking` `Sorting` `Combinatorics` `Weekly Contest 337`

You are given an array `nums` of positive integers and a **positive** integer `k`.

A subset of `nums` is **beautiful** if it does not contain two integers with an absolute difference equal to `k`.

Return _the number of **non-empty beautiful** subsets of the array `nums`_.

A **subset** of `nums` is an array that can be obtained by deleting some (possibly none) elements from `nums`. Two subsets are different if and only if the chosen indices to delete are different.

### Constraints
- `1 <= nums.length <= 18`
- `1 <= nums[i], k <= 1000`

### Examples

##### Example 1
> Input: `nums = [2,4,6], k = 2`   
> Output: `4`    
> Explanation: The beautiful subsets of the array nums are: [2], [4], [6], [2, 6].  
> It can be proved that there are only 4 beautiful subsets in the array: [2,4,6].  

##### Example 2
> Input: `nums = [1], k = 1`    
> Output: `1`    
> Explanation: The beautiful subset of the array nums is [1].  
> It can be proved that there is only 1 beautiful subset in the array [1].  

### 💡 Hints
* Sort the array nums and create another array cnt of size nums[i]
* Use backtracking to generate all the beautiful subsets. If cnt[nums[i] - k] is positive, then it is impossible to add nums[i] in the subset, and we just move to the next index. Otherwise, it is also possible to add nums[i] in the subset, in this case, increase cnt[nums[i]], and move to the next index.
* Bonus: Can you solve the problem in O(n log n)?

# Submissions

```js
  // the absolute difference is throwing me off
  // but this has to do with permutations and checking them against something
```
