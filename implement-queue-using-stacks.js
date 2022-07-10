/* TITLE
232. Implement Queue using Stacks

URL
https://leetcode.com/problems/implement-queue-using-stacks/

INSTRUCTIONS
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
 

Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false


*/

//create two stacks, one for push and one for pop
var MyQueue = function() {
    this.pushStack = []
    this.popStack = []
   
};

/** 
* @param {number} x
* @return {void}
*/
//push elements into the push stack 
MyQueue.prototype.push = function(x) {
   this.pushStack.push(x)
};

/**
* @return {number}
*/
//to pop elements, move all elements from push stack into pop stack and then pop the last item in the pop stack
MyQueue.prototype.pop = function() {
   if(this.popStack.length === 0 ){
       while(this.pushStack.length > 0){
           this.popStack.push(this.pushStack.pop())
       }
   }
   
   return this.popStack.pop()
   
};

/**
* @return {number}
*/
//to peek, move all elements from the push stack into the pop stack and then return the last item in the pop stack array. simple return dont pop it 
MyQueue.prototype.peek = function() {
  if(this.popStack.length === 0 ){
       while(this.pushStack.length > 0){
           this.popStack.push(this.pushStack.pop())
       }
   }
   
   return this.popStack[this.popStack.length-1]
   
};

/**
* @return {boolean}
*/
//check if both stacks are empty and return true if they are
MyQueue.prototype.empty = function() {
   return this.pushStack.length === 0  && this.popStack.length ===0
   
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
 **/