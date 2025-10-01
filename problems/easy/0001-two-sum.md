# [0001.](https://leetcode.com/problems/two-sum/) Two Sum
`Arrays` `Hash Table`

Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.

You may assume that each input would have **_exactly_ one solution**, and you may not use the _same_ element twice.

You can return the answer in any order.

### Constraints
- <code> 2 <= nums.length <= 10<sup>4</sup> </code>
- <code> -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup> </code>
- <code> -10<sup>9</sup> <= target <= 10<sup>9</sup> </code>
- **Only one valid answer exists.**

### Examples

##### Example 1
> Input: `nums = [2,7,11,15]`, `target = 9`  
> Output: `[0,1]`  
> Explanation: Because `nums[0] + nums[1] == 9`, we return `[0,1]`  

##### Example 2
> Input: `nums = [3,2,4]`, `target = 6`     
> Output: `[1,2]`    
> Explanation: Because `nums[1] + nums[2] == 6`, we return `[1,2]`  

##### Example 3
> Input: `nums = [3,3]`, `target = 6`     
> Output: `[0,1]`    
> Explanation: Because `nums[0] + nums[1] == 6`, we return `[0,1]`  

### 💡 Hints
* Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code> time complexity?
* A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's best to try out brute force solutions just for completeness. It is from these brute force solutions that you can come up with optimizations.
* So, if we fix one of the numbers, say `x`, we have to scan the entire array to find the next number `y` which is `value - x` where value is the input parameter. Can we change our array somehow so that this search becomes faster?
* The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?

# Submissions

There are 10 submissions, I'll copy/paste them another day
