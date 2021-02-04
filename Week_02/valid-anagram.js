/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 242. 有效的字母异位词
 * 
 */

//1. 排序 sort O(NlogN)  20: 50 - 21: 00
(function () {
    var isAnagram = function (s, t) {
        return s.split(",").sort().join("") === s.split(",").sort().join("");
    }
})();

//2. 哈希 O(n) 空间O(n) 21: 01 - 21：10
(function () {
    var isAnagram = function (s, t) {
        if (s.length !== t.length) return false;
        let map = new Map();
        for (let char of s) {
            if (map.has(char)) {
                map.set(char, map.get(char) + 1);
            } else {
                map.set(char, 1);
            }
        }
        for (let char of t) {
            if (map.has(char) && map.get(char) > 0) {
                if (map.get(char) === 1) {
                    map.delete(char);
                } else {
                    map.set(char, map.get(char) - 1);
                }
            } else {
                return false;
            }
        }
        return !map.size;
    };
})();