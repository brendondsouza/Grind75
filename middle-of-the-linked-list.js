/* TITLE
876. Middle of the Linked List

URL
https://leetcode.com/problems/middle-of-the-linked-list/

INSTRUCTIONS
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.


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
//two pointer approach, the fast pointer moves twice as fast as the slow pointer and hence when the fast pointer reachest he end, that means the slow pointer is halfway there and hence is the middle 
 var middleNode = function(head) {
  let fast = head
     let slow = head
  
  while(fast && fast.next){
      fast = fast.next.next
      slow = slow.next
  }
  return slow
  
};