/* TITLE
206. Reverse Linked List

URL
https://leetcode.com/problems/reverse-linked-list/

INSTRUCTIONS
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]


*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  let previous = null
  let current = head
  
  while(current){
      const next = current.next
      current.next = previous
      previous = current
      current = next
      
  }
   return previous
   
   
   
};