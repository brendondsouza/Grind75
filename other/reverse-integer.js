/* TITLE
7. Reverse Integer

URL
https://leetcode.com/problems/reverse-integer/

INSTRUCTIONS
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

*/

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let ans
    if(x<0){
        ans = "-"+String(Math.abs(x)).split('').reverse().join('')
    } else{
        ans = String(Math.abs(x)).split('').reverse().join('')
    }
    if (ans < (Math.pow(2, 31) * -1) || ans > Math.pow(2, 31) - 1) return 0;
    else return ans
};