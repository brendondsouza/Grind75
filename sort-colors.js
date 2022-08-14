/* TITLE
75. Sort Colors

URL
https://leetcode.com/problems/sort-colors/

INSTRUCTIONS
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]


*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// array nums -> contains 0,1,2
//do not return, modify nums in place
// [1,2,1,0,1,2] -> [0,1,1,1,2,2]
//[2,0,1] -> [0,1,2]

// var sortColors = function(nums){
//     let l = 0
//     let m = 0
//     let h = nums.length - 1
//     while(m <= h){
//         if(nums[m] === 0){
//             swap(nums, l,m)
//             l++
//             m++
//         } else if(m === 1){
//             m++
//         } else if(m === 2){
//             swap(nums, m, l)
//             h--
//         }
//     }
// };

// const swap = (arr, a,b) => {
//     let temp = arr[a]
//      arr[a] = arr[b]
//     arr[b] = temp
// }

var sortColors = function (nums) {
  var j = 0;
  var k = nums.length - 1;
  for (var i = 0; i <= k; i++) {
    if (nums[i] === 0) {
      swap(nums, i, j++);
    } else if (nums[i] === 2) {
      swap(nums, i--, k--);
    }
  }
};

var swap = function (arr, a, b) {
  var tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
};
console.log(sortColors([1, 2, 1, 0, 1, 2]), "[0,1,1,1,2,2]");
console.log(sortColors([2, 0, 1]), "[0,1,2]");

// let count = [0,0,0]
// for(let i = 0; i < nums.length; i++){
//     count[nums[i]]++
// }
//  for(let j = 0; j < nums.length; j++){
//       nums[j] = j < count[0] ? 0 : (j < count[0] + count[1]) ? 1 : 2
//  }
//  return nums
