/* TITLE
67. Add Binary


URL
https://leetcode.com/problems/add-binary/

INSTRUCTIONS
Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"


*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
  let sum = ''
  let carry = 0
  let i = a.length -1
  let j = b.length -1 
  
  while(i >= 0 || j >= 0){
      let A = a[i] || '0'
      let B = b[j] || '0'
      sum = String(A^B^carry) + sum
      if(A===B && A !== String(carry)){
          carry = Number(!carry)
      }
      i--
      j--
  }
  if(carry){
      sum = String(carry) + sum
  }
  return sum
  

  
};
//does not work for bigInt
// return (parseInt(a,2) + parseInt(b,2)).toString(2)