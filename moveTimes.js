// 有一个长度为n的数组，我们可以移动这个数组任意一项到第一位
// 比如[1,2,3,4,5,6,7],可以把6移动到第一位，变成[6,1,2,3,4,5,7]
// 给结果数组，请问需要移动到结果，最少需要移动少次
const moveTime = (n) => {
  if (n.length <= 1) return n.length
  let cnt = 1;
  let max = n[n.length - 1]
  for (let i = n.length - 2; i -= 1; i >= 0) {
    if (n[i] < max) {
      max = n[i]
      cnt += 1
    } else {
      break
    }
  }
  return n.length - cnt
}