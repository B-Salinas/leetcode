# [0050.](https://leetcode.com/problems/powx-n/) Pow(x,n)
`Math` `Recursion`

Implement pow(x, n), which calculates `x` raised to the power `n` (i.e., <code>x<sup>n</sup></code>).

### Constraints
- `-100.0 < x < 100.0`
- <code> -2<sup>31</sup> <= n <= 2<sup>31</sup>-1 </code>
- `n` is an integer.
- Either `x` is not zero or `n > 0`.
- <code> -10<sup>4</sup> <= x<sup>n</sup> <= 10<sup>4</sup> </code>

### Examples

##### Example 1
> Input: `x = 2.00000`, `n = 10` 
> Output: `1024.00000`  

##### Example 2
> Input: `x = 2.10000`, `n = 3`  
> Output: `9.26100`  

##### Example 3
> Input: `x = 2.00000`, `n = -2`  
> Output: `0.25000`  
> Explanation: <code>2<sup>-2</sup> = 1/2<sup>2</sup> = 1/4 = 0.25</code>

### 💡 Hints

# Submissions

#### 2014-11-19 @ 6:21 am cst  
- **Runtime**: 0 ms | 100.00% | O(Log(N))  
- **Memory**: 48.90 MB | 100.00% | O(Log(N))
- **Resources Used**: ChatGPT

```javascript
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    
    // check if n = 0, return 1 as x^n = x^0 = 1
    // check if n is negative
        // if negative, use 1/x as base
    // check if n is even/odd
        // if n is even, binary exponentiation
        // if n is odd, use n-1 as exponent

    // are we done recursing? x^0 = 1, identity property
    if (n === 0) return 1;

    // checking if n is negative (sqrt instead of sq)
    if (n < 0) {
        x = 1/x; // convert 
        n = -n; // n is a negative exponent
    };

    if (n % 2 === 0) {
        return myPow(x * x, n/2); // n is even, binary exponentiation 
    } else {
        return x * myPow(x, n-1); // n is odd, peel off an x, and continue as usual
    }
}
```
#### 2024-11-19 @ 6:34 am cst
- **Runtime**: 0 ms | 100.00%
- **Memory**: 49.98 MB | 100.00%
- **Resources Used**: ChatGPT

```javascript
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    
    let absN = Math.abs(n);
    let result = 1;
    
    while (absN > 0) {
        if (absN % 2 === 1) {
            result *= x;
        }
        x *= x;
        absN = Math.floor(absN / 2);
    }
    
    return n < 0 ? 1/result : result;
};
```
