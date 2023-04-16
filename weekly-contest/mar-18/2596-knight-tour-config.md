# Check Knight Tour Configuration

There is a knight on an `n x n` chessboard. In a valid configuration, the knight starts **at the top-left cell** of the board and visits every cell on the board **exactly once**.

You are given an `n x n` integer matrix `grid` consisting of distinct integers from the range `[0, n * n - 1]` where `grid[row][col]` indicates that the cell `(row, col)` is the `grid[row][col]th` cell that the knight visited. The moves are **0-indexed**.

Return `true` if `grid` represents a valid configuration of the knight's movements or `false` otherwise.

**Note:** A valid knight move consists of moving two squares vertically and one square horizontally, or two squares horizontally and one square vertically. The figure below illustrates all the possible eight moves of a knight from some cell.

<hr>

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
