/* TITLE
20. Valid Parentheses

URL
https://leetcode.com/problems/valid-parentheses/

INSTRUCTIONS
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  const bracket = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  
  let heap = []
  
  for(let char of s){
      if(bracket[char]){
          heap.push(bracket[char])
      } else{
          if(heap.pop() !== char) return false
      }
  } return (!heap.length)
  }