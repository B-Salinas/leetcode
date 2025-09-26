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
