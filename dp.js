// LCR 098. 不同路径
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
// 问总共有多少条不同的路径
// m = 3, n = 7 => 28
// m = 7, n = 3 => 28

const uniquePaths = (m, n) => {
  if (m === 1 || n === 1) return 1;
  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
}

const uniquePathsDp = (m, n) => {
  if (m === 1 || n === 1) return 1;
  const dp = [];
  for (let i = 0; i < m; i += 1) {
    dp[i] = [1]
  }
  for (let i = 0; i < n; i += 1) {
    dp[0][i] = 1
  }
  for (let i = 1; i < m; i += 1) {
    for (let j = 1; j < n; j += 1) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
}

const uniquePathsDpBetter = (m, n) => {
  if (m === 1 || n === 1) return 1;
  const dp = [];
  for (let i = 0; i < m; i += 1) {
    dp[i] = 1
  }
  for (let i = 1; i < n; i += 1) {
    for (let j = 1; j < m; j += 1) {
      dp[j] += dp[j - 1]
    }
  }
  return dp[m - 1]
}

const uniquePathsCmn = (m, n) => {
  const _jiechen = (a, b = 1) => {
    let res = 1;
    while(a > b) {
      res = res * a;
      a -= 1
    }
    return res
  }
  const _Cmn = (a, b) => _jiechen(a, b) / _jiechen(a - b)
  return _Cmn(m - 1 + n - 1, m - 1)
}

console.log(uniquePaths(3, 7));
console.log(uniquePathsDp(3, 7));
console.log(uniquePathsDpBetter(3, 7));
console.log(uniquePathsCmn(3, 7))

// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
// 你可以认为每种硬币的数量是无限的。
// 示例 1：
// 输入：coins = [1, 2, 5], amount = 11
// 输出：3 
// 解释：11 = 5 + 5 + 1

// 示例 2：
// 输入：coins = [2], amount = 3
// 输出：-1

// 示例 3：
// 输入：coins = [1], amount = 0
// 输出：0

const coinChange = (coins, amount) => {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0
  for (let i = 1; i <= coins; i += 1) {
    for (let coin of coins) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}
