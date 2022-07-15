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
  //initialize variables to get the items starting from the back
  let i = a.length -1
  let j = b.length -1 
  
  while(i >= 0 || j >= 0){
    //get the bit at the index or get 0 if the bits run out to prevent the code logic from breaking later
      let A = a[i] || '0'
      let B = b[j] || '0'
      //use xor operator to create the truth table and add in front of the sum string 
      sum = String(A^B^carry) + sum
      //according to what we saw in the truth table, when a and b are the same, the carry flips in value 
      if(A===B && A !== String(carry)){
          carry = Number(!carry)
      }
      i--
      j--
  }
  //in the end if a carry is left add it to the front 
  if(carry){
      sum = String(carry) + sum
  }
  return sum
  
};
//does not work for bigInt
// return (parseInt(a,2) + parseInt(b,2)).toString(2)