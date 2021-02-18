# 第三周学习总结 - 泛型递归、树的递归、分治、回溯 #

## 一、递归 ##
- 递归的本质类似于循环，通过函数体来进行的循环，自己调自己(重复性)
### 1.1 盗梦空间 ###
- 向下进入到不同梦境中； 向上又回到原来一层
- 通过声音同步到上一层
- 每一层的环境和周围的人都是一份拷贝，主角等几个人穿越不同层级的梦境（发生和携带变化)
### 1.2 递归代码模板 ###
* 养成机械化记忆 *
`
function recursion(leve1, ...params) {
    //recursion terminator 递归终结条件
    if (level > MAX_LEVEL) {
        process_result
        return 
    }

    //process logic in current level 处理当前层逻辑

    //drill down 下探到下一层
    recurion(level + 1, ...params);

    //reverse the current level status if needed  清理当前层
}
`
### 1.3 递归思维要点 ###
- 1.不要人肉递归（直接看函数本身即可）
- 2.找到最近最简办法，将其拆解成可重复解决的问题（重复子问题！！！）
- 3.数学归纳法 

## 二、分治和回溯 ## 
**特殊的递归**
### 2.1 分治 ###
**本质：找出重复性**
分治代码模板
`
function divide_conquer(problem, ...params) {
    // recursion terminator 
    if (problem === null) {
        print_result
        return
    }
    // prepare data  处理当前层逻辑（把大问题拆成多个小问题）
    data = prepare_data(problem)
    subproblems = split_problem(problem, data)
    // conquer subproblems  下探到下一层
    subresult1 = divide_conquer(subproblems[0], ...ps);
    subresult2 = divide_conquer(subproblems[0], ...ps);
    subresult3 = divide_conquer(subproblems[0], ...ps);
    ...
    // process and generate the final result
    result = process_result(subresult1, subresult2, subresult3, ...)
    // revert the current level states
}
`

### 2.2 回溯 ###
**回溯法采用试错的思想，尝试分布的去解决一个问题，通常用递归法来实现**
    - 找到一个可能存在的正确答案
    - 在尝试了所有可能的分步方法后宣传该问题没有答案
    在最坏的情况下，回溯法会导致一次复杂度为指数时间的计算