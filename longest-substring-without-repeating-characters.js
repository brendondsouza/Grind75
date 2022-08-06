/* TITLE
3. Longest Substring Without Repeating Characters

URL
https://leetcode.com/problems/longest-substring-without-repeating-characters/

INSTRUCTIONS
Given a string s, find the length of the longest substring without repeating characters.


Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let begin = 0;
  let map = {};

  for (let end = 0; end < s.length; end++) {
    if (map[s[end]] !== undefined && map[s[end]] >= begin) {
      begin = map[s[end]] + 1;
    }
    map[s[end]] = end;
    max = Math.max(max, end - begin + 1);
  }
  return max;
};
