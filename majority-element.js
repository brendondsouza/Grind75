/* TITLE
169. Majority Element


URL
https://leetcode.com/problems/majority-element/


INSTRUCTIONS



*/

/**
 * @param {number[]} nums
 * @return {number}
 */

//first solution

var majorityElement = function(nums) {
    
    if(nums.length === 1){
        return nums[0]
    }
    let map = {}
    for(const num of nums){
        if(!map[num]){
            map[num] = 0
        }
        map[num]++
    } 
        console.log(map)
        let majority = 0
        let answer
        for(const key in map){
            if(map[key] > majority){
                majority = map[key]
                answer = key
            }
        }
        return answer
    };

    //second solution
    
var majorityElement = function(nums) {
    
  if(nums.length === 1){
      return nums[0]
  }
  let map = {}
   for(const num of nums){
       if(map[num] && map[num]+1 > (nums.length)/2){
           return num
       } else {
           map[num] ? map[num]++ : map[num] = 1
       }
   }
  };