# [2596.](https://leetcode.com/problems/check-knight-tour-configuration/description/) Check Knight Tour Configuration
`Array` `Depth-First Search` `Breadth-First Search` `Matrix` `Simulation` `Weekly Contest 337`

There is a knight on an `n x n` chessboard. In a valid configuration, the knight starts **at the top-left cell** of the board and visits every cell on the board **exactly once**.

You are given an `n x n` integer matrix `grid` consisting of distinct integers from the range `[0, n * n - 1]` where `grid[row][col]` indicates that the cell `(row, col)` is the <code>grid[row][col]<sup>th</sup></code> cell that the knight visited. The moves are **0-indexed**.

Return `true` _if `grid` represents a valid configuration of the knight's movements or `false` otherwise_.

**Note** that a valid knight move consists of moving two squares vertically and one square horizontally, or two squares horizontally and one square vertically. The figure below illustrates all the possible eight moves of a knight from some cell.

### Constraints
- `n == grid.length == grid[i].length`
- `3 <= n <= 7`
- `0 <= grid[row][col] < n * n`
- All integers in `grid` are unique.

### Examples

##### Example 1
> Input: `grid = [[0,11,16,5,20],[17,4,19,10,15],[12,1,8,21,6],[3,18,23,14,9],[24,13,2,7,22]]`   
> Output: `true`    
> Explanation: The above diagram represents the grid. It can be shown that it is a valid configuration.  

##### Example 2
> Input: `grid = [[0,3,6],[5,8,1],[2,7,4]]`    
> Output: `false`    
> Explanation:  The above diagram represents the grid. The <code>8<sup>th</sup></code> move of the knight is not valid considering its position after the <code>7<sup>th</sup></code> move. 

### 💡 Hints
* It is enough to check if each move of the knight is valid.
* Try all cases of the knight's movements to check if a move is valid.

# Submissions

```js

 // NOTES
    // there's definitely a relationship between the n x n grid and the configuration of the knight
    // following the path of the knight results in star-shaped routes
     
    
    // DEFINITIONS
    // valid knight move:
        // 2 squares vertically and 1 square horizontally 
        // 2 squares horizontally and 1 square vertically
        
    // there can exist up to 8 valid knight moves from some cell given some n x n board
    
    //
    
    // knight is on top-left corner of n x n board
    // check if either config_1 (2 vertical and 1 horizontal move) or config_2 (2 horizonal and 1 vertical move) is valid
        // if both are valid
            // continue
        // if neither are valid
            //return false
            
    // at some point, the knight might be forced to make an invalid move due to no available square, return false
    
    // a while statement constantly checking whether that knight has a valid move available sounds like a good idea



```
