# 第三周学习总结 - 深度优先搜索、广度优先搜索、贪心算法、二分查找 #

### 搜索 - 遍历 ###
- 深度优先搜索
- 广度优先搜索
- 启发式有限搜索（优先级搜索）

#### DFS 代码 - 递归写法 ####
```
visited = set()
def dfs(node, visited):
    if node in visited: #termintor
    # already visited
    return 

    visited.add(node)

    # process current node here
    #...

    for next_node in node.children():
        if not next_node in visited:
            dfs(next node, visited)
    
```
#### DFS 代码 - 非递归写法 ####
```
def DFS(self, tree):
    if tree.root is None:
        return []
    visited, stack = [], [tree.root]

    while stack:
        node = stack.pop()
        visited.add(node)

        process (node)
        nodes = grenerate_related_nodes(node)
        statck.push(nodes)

     #other processing work
     #...
```

### BFS 广度优先遍历 - 用队列 ###
#### BFS 代码结构 ###
```
function BFS(graph, start, end) {
    let queue = []
    queue.append([start])
    visited.add(start)

    while (queue.length) {
        let node = queue.shift();
        visited.add(node);

        process(node)
        node = generate_related_nodes(node)
        queue.push(nodes)

        // other processing work
    }
}
```
## 贪心算法 Greedy ## 
    贪心算法是一种在每一步选中都采取在当前状态下最好或最优(即最有利)的选择，从而希望导致结果是全局最好或最优的算法。
    贪心算法与动态规划的不同在于它对每个子问题的解决方案都做出选择，不能回退。动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能。
    贪心法可以解决一些最优化问题，如：求图中的最小生成树、求哈夫曼编码等。然而对于工程和生活中的问题，贪心法一般不能得到我们所要的答案。
    一旦一个问题可以通过贪心法来解决。那么贪心法一般是解决这个问题的最好办法。由于贪心法的高效性以及其所求得的答案比较接近最优结果，贪心法也可以用作辅助算法或者直接解决一些要求结果不特别精确的问题。
### 适用贪心算法的场景 ###
    问题能分解成子问题来解决，子问题的最优解能递推到最终问题的最优解。这种子问题最优解称为最优子结构。

## 二分查找 ##
### 二分查找的前提 ### 
1. 目标函数单调性（单调递增或者递减）
2. 存在上下界(bounded)
3. 能够通过索引访问 (index accessible)

### 二分查找代码模板 ###
```
let left = 0, right = array.length - 1;
while (left <= right) {
    let mid = (left + right) / 2;
    if (array[mid] === target) {
        //find the target
        //break or return result
    } else if (array[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
```