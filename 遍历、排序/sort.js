const init = [1, 8, 9, 1, 12, 22, 2, 3, 23, 14];

const sum = (arr, index = 0) => {
  if (index >= arr.length) return 0;
  return arr[index] + sum(arr, index + 1)
}

console.log(sum(init, 0));

// 冒泡
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 交换相邻元素
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// 选择排序
// 选择排序每次从未排序部分中选择最小的元素，放到已排序部分的末尾。
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 交换最小元素到已排序部分的末尾
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

// 插入排序（Insertion Sort）
// 插入排序通过构建有序数组，逐个将未排序元素插入到已排序部分的适当位置。
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// 快排
// 快速排序通过选择一个基准元素，将数组分为两部分（小于基准和大于基准），然后递归排序。
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

// 归并排序（Merge Sort）
// 归并排序通过将数组分成两半，分别排序后再合并。

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  // 分割数组
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // 递归排序并合并
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  // 合并两个有序数组
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // 将剩余元素加入结果
  return result.concat(left.slice(i)).concat(right.slice(j));
}
