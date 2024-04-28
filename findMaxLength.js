/**
 *  从一个数组里，找到递增的最大长度
 *  [5, 4, 3, 6, 8, 12, 3, 4, 1, 8, 99, 107, 2, 23]
 */

function findMaxLength(arr) {
  // if (arr.length === 0) return []
  // const res = [[arr[0]]]

  // function _updateRes(n) {
  //   for (let i = res.length - 1; i >= 0; i --) {
  //     const line = res[i];
  //     const tail = line[line.length -1]
  //     if (n > tail) {
  //       res[i + 1] = [...line, n];
  //       break
  //     } else if (n < tail && i === 0) {
  //       res[0] = [n]
  //     }
  //   }
  // }

  // for (let i = 0; i < arr.length; i ++) {
  //   const n = arr[i];
  //   _updateRes(n);
  // }
  // return res
}

// console.log(findMaxLength([5, 4, 3, 6, 8, 12, 3, 4, 1, 8, 99, 2, 23]))

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const res = [[nums[0]]];
  for (let i = 1; i < nums.length; i += 1) {
      const x = nums[i];
      for (let j = res.length - 1; j >= 0; j -= 1) {
          const m = res[j];
          console.log('res', res, 'j', j, 'm', m);
          const tail = m[m.length - 1];
          // console.log('x', x, 'tail', tail)
          if (x > tail) {
              res[j + 1] = [...m, x];
              break;
          } else if (x < tail && j === 0) {
              res[0] = [x]
          }
      }
  }
  return res
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
