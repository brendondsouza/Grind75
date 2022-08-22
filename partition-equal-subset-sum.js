/* TITLE
416. Partition Equal Subset Sum

URL
https://leetcode.com/problems/partition-equal-subset-sum/

INSTRUCTIONS
Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

 

Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
 

Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 100
Accepted
508,250
Submissions



*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  if (sum % 2 !== 0) return false;
  sum = sum / 2;

  let dp = Array(sum + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let i = sum; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }
  return dp[sum];
};
