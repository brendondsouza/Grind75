/* TITLE
46. Permutations

URL
https://leetcode.com/problems/permutations/

INSTRUCTIONS
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.


*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];

  if (nums.length === 0) return [[]];
  if (nums.length === 1) return [[nums[0]]];

  for (let i = 0; i < nums.length; i++) {
    let numsCopy = [...nums];
    numsCopy.splice(i, 1);
    rtnVal = permute(numsCopy);
    for (let j = 0; j < rtnVal.length; j++) {
      result.push([nums[i], ...rtnVal[j]]);
    }
  }

  return result;
};
