/**
 * 62. 不同路径
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？
 * @param {number} m
 * @param {number} n
 * @return {number}
 */


// 动态规划
var uniquePaths = function(m, n) {
    const dp = new Array(n).fill(1)
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] += dp[j-1]
        }
    }
    return dp[n - 1];
};


// 排列组合
var uniquePaths = function(m, n) {
    let ans = 1;
    for (let x = n, y = 1; y < m; ++x, ++y) {
        ans = Math.floor(ans * x / y);
    }
    return ans;
};

// 排列组合土逼版
var uniquePaths = function(m, n) {
    const fact = (n) => {
        if (n === 0 || n === 1) return 1
        return fact(n - 1) * n
    }
    const combo = (x, y) => fact(y) / (fact(x) * fact(y - x))
    return combo(m - 1, m + n - 2)
};