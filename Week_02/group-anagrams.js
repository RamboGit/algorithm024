/**
 * @param {string[]} strs
 * @return {string[][]}
 * 解法：排序 + 哈希 
 * 复杂度分析： 时间O(n * klogk)  空间 O(n)
 * 49. 字母异位词分组
 * https://leetcode-cn.com/problems/group-anagrams/
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    let res = [];
    for (let str of strs) {
        let tmp = str.split("").sort().join("");
        if (map.has(tmp)) {
            res[map.get(tmp)].push(str);
        } else {
            map.set(tmp, res.length);  //未添加元素所以取 res.length
            res.push([str]);
        }
    }
    return res;
};