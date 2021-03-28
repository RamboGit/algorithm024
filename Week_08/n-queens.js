/**
 * https://leetcode-cn.com/problems/n-queens/description/
 * 51. N 皇后
 *
*/
var solveNQueens = function (n) {
    let size = (1 << n) - 1;
    let count = 0;
    solve(0, 0, 0);
    return count;
    function solve(row, ld, rd) {
        if (row === size) {
            count++;
            return;
        }
        const pos = size & (~(row | ld | rd));
        while (pos !== 0) {
            const p = pos & (-pos);
            pos -= p;
            solve(row | p, (ld | p) << 1, (rd | p) >> 1);
        }
    }
}