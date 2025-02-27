const init = [1, 8, 9, 1, 12, 22, 2, 3, 23, 14];

const sum = (arr, index = 0) => {
  if (index >= arr.length) return 0;
  return arr[index] + sum(arr, index + 1)
}

console.log(sum(init, 0));

Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if (arr.length <= 1) return arr
    const mid = arr[0]
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i ++) {
      if (arr[i] < mid) {
        left.push(arr[i])
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  }
  return rec(this);
}

console.log(init.quickSort());

const quickSort = (nums) => {
  if (nums.length <= 1) return nums
  let mid = nums[0]
  let left = []
  let right = []
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] < mid) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }
  return [...quickSort(left), mid, ...quickSort(right)]
}
