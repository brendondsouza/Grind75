/* TITLE
217. Contains Duplicate

URL
https://leetcode.com/problems/contains-duplicate/

INSTRUCTIONS
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true



*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
//create a unique set and then use the spread operator to convert it into an array to be able to compare lengths 
  let unique = [...new Set(nums)]
  
  return unique.length !== nums.length
  
};

//better solution
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {}
    
    for(const num of nums){
        if(map[num]){
            return true
        } else{
            map[num] = true
        }
    }
return false
}
