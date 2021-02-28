/**
 * https://leetcode-cn.com/problems/number-of-islands/
 * 200. 岛屿数量
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0, n = grid.length;
    if (n === 0) return 0;
    let m = grid[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === "1") {
                DFSMarking(grid, i, j);
                count++;
            }
        }
    }

    function DFSMarking(grid, i, j) {
        //递归终止条件
        if (i >= n || j >= m || i < 0 || j < 0 || grid[i][j] === "0") return;
        //都设为0
        grid[i][j] = "0";
        DFSMarking(grid, i + 1, j);
        DFSMarking(grid, i - 1, j);
        DFSMarking(grid, i, j + 1);
        DFSMarking(grid, i, j - 1);
    }
    return count;
};