/* TITLE


URL
https://leetcode.com/problems/rotting-oranges/

INSTRUCTIONS
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

 

Example 1:


Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.


*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let fresh = 0;
  let time = 0;
  let q = [];

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 1) {
        fresh += 1;
      } else if (grid[r][c] === 2) {
        q.push([r, c]);
      }
    }
  }
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (q.length && fresh) {
    // for (let i = 0; i < q.length; i++) {
    let size = q.length;
    while (size--) {
      const [r, c] = q.shift();
      for (const [dr, dc] of directions) {
        let row = dr + r;
        let col = dc + c;
        if (
          row < 0 ||
          row >= grid.length ||
          col < 0 ||
          col >= grid[0].length ||
          grid[row][col] !== 1
        ) {
          continue;
        }
        grid[row][col] = 2;
        q.push([row, col]);
        fresh--;
      }
    }
    time++;
  }
  return fresh === 0 ? time : -1;
};
