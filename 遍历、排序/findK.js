const findK = (arr, k) => {
  if (arr.length <= 1) return arr[0]
  if (arr.length < k) return
  const mid = arr[0];
  const left = [];
  const right = []
  for (let i = 1; i < arr.length; i += 1) {
    const value = arr[i]
    if (value < mid) {
      left.push(value)
    } else {
      right.push(value)
    }
  }
  if (right.length < k - 1) {
    return findK(left, k - 1 - right.length)
  } else if (right.length === k - 1) {
    return mid
  } else {
    return findK(right, k)
  }
}

const arr = [3, 2, 1, 5, 6, 4];
console.log(findK(arr, 2)); // 输出: 5
console.log(findK(arr, 1)); // 输出: 6
console.log(findK(arr, 6)); // 输出: 1

class MinHeap {
  constructor() {
    this.heap = []
  }

  getParentIndex(i) {
    // return (i - 1) >> 1
    return Math.floor((i - 1) / 2)
  }

  getChildLeft(i) {
    return i * 2 + 1
  }

  getChildRight(i) {
    return i * 2 + 2
  }

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
  }

  shiftUp(index) {
    if (index === 0) return
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1)
  }

  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0);
  }

  shiftDown(index) {
    const leftIndex = this.getChildLeft(index)
    const rightIndex = this.getChildRight(index)
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }

  peek() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }
}

const findKWithHeap = (arr, k) => {
  const heap = new MinHeap();
  arr.forEach(n => {
    heap.insert(n);
    if (heap.size() > k) {
      heap.pop()
    }
  })
  return heap.peek()
}

