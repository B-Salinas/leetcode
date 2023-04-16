**Easy**

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

<hr>

```js

  // think of a catepillar moving along
    // can this be recursive?
    // we can also "manipulate" a copy of the nums array and return that

    // vvv FLIP THE DIRECTION THAT I'M GOING vvv
    for (let i = 0; i < nums.length - 1; i++) {

        let j = i + 1;
        let runningSum = [nums[0]];

        let cursor_i = nums[i];
        let cursor_j = nums[j];

        while (cursor_j <= nums.length) {
          // magic happens
        }



```
