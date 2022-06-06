/* TITLE
242. Valid Anagram

URL
https://leetcode.com/problems/valid-anagram/

INSTRUCTIONS
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
        const count = {}
        
        for(let i = 0; i < s.length; i++){
            if(!count[s[i]]) count[s[i]] = 0
            if(!count[t[i]]) count[t[i]] = 0
            count[s[i]]++
            count[t[i]]--
        }
        for(const ch in count){
            if(count[ch] !== 0) return false
        } 
        return true
        
    };

    //previous solution: not very time effective 

    /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('')
    
};

