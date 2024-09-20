The Tribonacci sequence $T_n$ is defined as follows:

$T_0 = 0$, $T_1 = 1$, $T_2 = 1$, and $T_{n+3} = T_n + T_{n+1} + T_{n+2}$ for $n >= 0$.

Given `n`, return the value of $T_n$.

---

### [Submission 1](/easy/1137-nth-tribonacci-number/1137-nth-tribonacci-number-1.js)

Runtime: 48 ms | Beats 69.35%  
Memory: 48.85 mb | Beats 37.04%

- Classic Fibonacci approach, tweaked for 3 initial values instead of 2

### [Submission 2](/easy/1137-nth-tribonacci-number/1137-nth-tribonacci-number-2.js)

Runtime: 41 ms | Beats 94.72%  
Memory: 48.62 mb | Beats 64.44%

- Memorization approach. Main function creates instance of memo with an inner function that creates the memo hash table itself with every new `n`
