/* TITLE
389. Find the Difference

URL
https://leetcode.com/problems/find-the-difference/

INSTRUCTIONS
You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.

Example 1:

Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.
Example 2:

Input: s = "", t = "y"
Output: "y"

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    //split into letters, check t vs s, if returns -1 then its the letter
   //return  t.split('').filter(x=> !s.includes(x))[0]
   s =  s.split('').sort()
   t =  t.split('').sort()
    for(let i = 0; i < t.length; i++){
        if(t[i] !== s[i]){
            return t[i]
            break
        }
    }
};