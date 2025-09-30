# [2595.](https://leetcode.com/problems/number-of-even-and-odd-bits/description/) Number of Even and Odd Bits
`Bit Manipulation` `Weekly Contest 337`

You are given a **positive** integer `n`.

Let `even` denote the number of even indices in the binary representation of `n` with value 1.

Let `odd` denote the number of odd indices in the binary representation of `n` with value 1.

Note that bits are indexed from **right to left** in the binary representation of a number.

Return the array `[even, odd]`.

### Constraints
- `1 <= n <= 1000`

### Examples

##### Example 1
> Input: `n = 50`  
> Output: `[1,2]`  
> Explanation: 
> The binary representation of 50 is `110010`.
> It contains 1 on indices 1, 4, and 5.

##### Example 2
> Input: `n = 2`  
> Output: `[0,1]`  
> Explanation:
> The binary representation of 2 is `10`.
> It contains 1 only on index 1.










# Submissions





```javascript

  // read n
    // convert n to binary
        // function to convert to binary ? 
    // read binary sequence of n
        // BIG-O effected by length of sequence and time it takes to read the sequence
    // count even & odd indices filled w the value of 1
        // BIG-O of counting time 
    // return [even, odd] array
    
    //
    
    // any imports related to binary ? 
    
    let even_idx = 0;
    let odd_idx = 0;
    
    let answer = [even_idx, odd_idx];
    
    // magic happens
    
    return answer;
```
