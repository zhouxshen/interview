/**
 *  从一个数组里，找到递增的最大长度
 *  [5, 4, 3, 6, 8, 12, 3, 4, 1, 8, 99, 107, 2, 23]
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS1 = function(nums) {
  if (nums.length <= 1) return nums.length
  const res = [nums[0]]
  function getterIndex(target) {
      if (res.length  === 1) return 0
      let left = 0;
      let right = res.length - 1;
      while(left <= right) {
          const mid = Math.floor((left + right) / 2)
          if ((res[mid] > target && (res[mid - 1] == undefined || res[mid - 1] < target)) || res[mid] === target) {
            return mid
          } else if (res[mid] <= target) {
              left = mid + 1
          } else {
              right = mid - 1
          }
      }
  }
  for (let i = 1; i < nums.length; i += 1) {
      console.log('res', res, nums[i])
      if (nums[i] > res[res.length - 1]) {
        res.push(nums[i])
      } else {
        const index = getterIndex(nums[i])
        res[index] = nums[i]
      }
  }
  return res.length
};


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

console.log(lengthOfLIS1([10,9,2,5,3,4]));
