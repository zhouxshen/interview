/**
加1
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1：

输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
示例 2：

输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
示例 3：

输入：digits = [9]
输出：[1,0]
解释：输入数组表示数字 9。
加 1 得到了 9 + 1 = 10。
因此，结果应该是 [1,0]。
 */

var plusOne = function(digits) {
  let cnt = 0;
  for (let i = digits.length - 1; i >= 0; i -= 1) {
      if (digits[i] === 9) {
          cnt += 1
      } else {
          break
      }
  }
  if (cnt === 0) {
      digits[digits.length - 1] = digits[digits.length - 1] + 1
      return digits
  } else if (cnt === digits.length) {
      const ans = new Array(cnt + 1).fill(0)
      ans[0] = 1
      return ans
  } else {
      for (let i = 0; i < cnt; i += 1) {
          digits[digits.length - 1 - i] = 0
      }
      digits[digits.length - 1 - cnt] = digits[digits.length - 1 - cnt] + 1
      return digits
  }
};