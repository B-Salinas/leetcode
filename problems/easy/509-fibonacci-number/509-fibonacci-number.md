The **Fibonacci numbers**, commonly denoted `F(n)` form a sequence, called the **Fibonacci sequence**, such that each number is the sum of the two preceding ones, starting from `0` and `1`. That is,

```
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
```

Given `n`, calculate `F(n)`.

---

### [Submission 1](/easy/509-fibonacci-number/509-fibonacci-number-1.js)

Runtime: 58 ms | Beats 50.31%  
Memory: 49.12 mb | Beats 7.30%

- Standard approach that builds the sequence iteratively compared to recursively
