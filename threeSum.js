/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

  你返回所有和为 0 且不重复的三元组。
 */
var threeSum = function(nums1) {
  const res = [];
  const nums = nums1.sort((a, b) => a - b);
  const len = nums.length;
  for (let i = 0; i < len - 2; i += 1) {
    const x = nums[i];
    if (x + nums[i + 1] + nums[i + 2] > 0) break;
    if (x + nums[len - 2] + nums[len - 1] < 0) continue;
    if (x === nums[i - 1]) continue;
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const s = x + nums[left] + nums[right];
      if (s > 0) {
        right -= 1;
      } else if (s < 0) {
        left += 1;
      } else {
        res.push([x, nums[left], nums[right]]);
        left += 1;
        while(left < right && nums[left] === nums[left - 1]) left += 1;
        right -= 1;
        while(left < right && nums[right] === nums[right + 1]) right -= 1;
      }
    }
  }
  return res;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([0, 0, 0, 0, 0, 0]));
