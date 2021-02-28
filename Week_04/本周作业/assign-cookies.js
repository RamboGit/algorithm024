/**
 * https://leetcode-cn.com/problems/assign-cookies/description/
 * 455. 分发饼干
*/

/**
 * 解法：贪心算法-先喂饱小饼干
*/
var findContentChildren = function (g, s) {
    //先排序
    g.sort((a, b) => { return a - b; });
    s.sort((a, b) => { return a - b; });
    let res = 0;
    let index = 0;
    //先喂饱小饼干
    for (let i = 0; i < s.length; i++) {
        if (index < g.length && g[index] <= s[i]) {
            res++;
            index++;
        }
    }
    return res;
};