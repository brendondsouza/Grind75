/* TITLE
542. 01 Matrix

URL
https://leetcode.com/problems/01-matrix/

INSTRUCTIONS
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

 

Example 1:


Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]
Example 2:


Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]
 

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
mat[i][j] is either 0 or 1.
There is at least one 0 in mat.


*/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let q = [];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        q.push([i, j]);
      } else {
        mat[i][j] = -1;
      }
    }
  }
  let direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let level = 0;
  while (q.length !== 0) {
    level++;
    let size = q.length;
    while (size--) {
      const [r, c] = q.shift();
      for (const [dr, dc] of direction) {
        let row = dr + r;
        let col = dc + c;
        if (
          row < 0 ||
          row >= mat.length ||
          col < 0 ||
          col >= mat[0].length ||
          mat[row][col] !== -1
        ) {
          continue;
        }
        mat[row][col] = level;
        q.push([row, col]);
      }
    }
  }
  return mat;
};
