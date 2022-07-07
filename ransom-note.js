/* TITLE
383. Ransom Note

URL
https://leetcode.com/problems/ransom-note/

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.


*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

//construct an object with the letters in magazine
//if letter exists in note then decrement
//if letter doesnt exists then return false
//if nothing happens then return true

var canConstruct = function(ransomNote, magazine) {
    
    let obj = {}
    for(const el of magazine){
        if(!obj[el]){
            obj[el] = 1
        }else obj[el]++
    }
    console.log(obj)
    
    for(const el of ransomNote){
        if(obj[el]){
            obj[el]--
        } else {
            return false
        }
    } 
    return true
};