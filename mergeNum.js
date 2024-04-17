/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let index1 = 0;
  let index2 = 0;
  const res = [];
  while (index1 < m || index2 < n) {
      console.log('index1', index1, 'index2', index2)
      if (index1 === m) {
          res.push(nums2[index2])
          index2 ++
      } else if (index2 === n) {
          res.push(nums1[index1])
          index1 ++
      } else if (nums1?.[index1] < nums2?.[index2]) {
          res.push(nums1[index1])
          index1 ++
      } else {
          res.push(nums2[index2])
          index2 ++
      }
  }
  return res;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6] ,3));
