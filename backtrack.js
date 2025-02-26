// //给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：

// 输入：nums = [1]
// 输出：[[1]]

// 1 2 3  1 

const dealArr = (arr) => {
  const result = []
  const keys = new Array(arr.length).fill(false);

  const back = (nums) => {
    if (arr.length === nums.length) {
      result.push([...nums])
      return
    }

    for (let i = 0; i < arr.length; i += 1) {
      if (keys[i]) continue
      nums.push(arr[i])
      back(nums)
      nums.pop()
      keys[i] = false
    }
  }

  back([])

  return result
}
