/* TITLE
https://leetcode.com/problems/counting-bits/

URL
https://leetcode.com/problems/counting-bits/

INSTRUCTIONS
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
Example 2:

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101


*/

/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
  let arr = []
  for(let i = 0; i <= n; i++){
      let bin = i.toString(2)
      let len = bin.split('').filter(i => i === '1').length
      arr.push(len)
  }
  return arr
  
};