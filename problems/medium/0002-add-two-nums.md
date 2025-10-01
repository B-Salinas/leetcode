# [0002.](https://leetcode.com/problems/add-two-numbers/) Add Two Numbers
`Linked List` `Math` `Recursion`  

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. 

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

### Constraints
* The number of nodes in each linked list is in range `[1, 100]`.
* `0 <= Node.val <= 9`
* It is guaranteed that the list represents a number that does not have leading zeros.

### Examples

##### Example 1
> Input: `l1 = [2,4,3], l2 = [5,6,4]`   
> Output: `[7,0,8]`    
> Explanation: `342 + 465 = 807`    

##### Example 2
> Input: `l1 = [0], l2 = [0]`    
> Output: `[0]`    
> Explanation: `0 + 0 = 0`    

##### Example 3
> Input: `l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]`    
> Output: `[8,9,9,9,0,0,0,1]`    
> Explanation: `9,999,999 + 9,999 = 10,009,998`

### 💡 Hints

# Submissions

#### 2025-09-29 @ 10:40 pm cst   
- **Runtime**: 7 ms | 31.33% | O(Max(M,N))
- **Memory**: 18.04 MB | 14.57% | O(Max(M,N)) 
- **Resources Used**: Neetcode's Walkthrough [Video](https://www.youtube.com/watch?v=wgFPrzTjm7s)

```python3
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:

        res = ListNode()                    # returning new List
        cur = res                           # current pointer at the position we insert new node
        
        carry = 0                           # for carrying over
        while l1 or l2 or carry:            # adding together while either has a digit
            v1 = l1.val if l1 else 0        # as long as l1 are not null
            v2 = l2.val if l2 else 0        # as long as l2 are not null
        
            val = v1 + v2 + carry           # this will get inserted into res
            carry = val // 10               # if vl3 needs a carry
            val = val % 10                  # we technically only want the ones place

            cur.next = ListNode(val)        # move pointer

            cur = cur.next                  # continue the while loop
            l1 = l1.next if l1 else None        
            l2 = l2.next if l2 else None 

        return res.next                    
```

#### 2025-09-30 @ 12:19 am cst   
- **Runtime**: 7 ms | 31.33% | O(Max(M,N))  
- **Memory**: 17.74 MB | 84.79% | O(Max(M,N))  
- **Resources Used**: ChatGPT

```python3
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:

        dummy = ListNode()
        current = dummy
        carry = 0
    
        while l1 or l2 or carry:
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0
            total = val1 + val2 + carry
        
            carry = total // 10
            digit = total % 10
            current.next = ListNode(digit)
        
            current = current.next
            if l1: l1 = l1.next
            if l2: l2 = l2.next
        
        return dummy.next
```
