# 70. Climbing Stairs

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

---

### [Submission 1](/easy/70-climbing-stairs/70-climbing-stairs-1.js)

Runtime: 48 ms | Beats 71.02%  
Memory: 48.45 mb | Beats 82.69%

- Classic Fibonacci approach, with an adjustment for intial values

### [Submission 2](/easy/70-climbing-stairs/70-climbing-stairs-2.js)

Runtime: 58 ms | Beats 16.62%  
Memory: 49.44 | Beats 7.29%

- Directly calculated the nth Fibonacci Number, which is how this problem is solved, by using Binet's formula

### [Submission 3](/easy/70-climbing-stairs/70-climbing-stairs-3.js)
Runtime: 42 ms | Beats 92.94%  
Memory: 48.71 mb | Beats 50.4%  

- Fibonacci numbers can be expressed with matrix exponentiation. We utilize the special property of  
$[[1,1],[1,0]]^n = [ [F(n+1), F(n)], [F(n), F(n-1)] ]$.