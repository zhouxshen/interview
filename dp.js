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
