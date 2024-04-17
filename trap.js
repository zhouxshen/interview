/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let ans = 0;
  const pre = [height[0]];
  for (let i = 1; i < height.length; i += 1) {
      pre.push(height[i] > pre[pre.length - 1] ? height[i] : pre[pre.length - 1]);
  }
  const sub = new Array(height.length);
  sub[height.length - 1] = height[height.length - 1]
  for (let i = height.length - 2; i >= 0; i -= 1) {
    sub[i] = height[i] > sub[i + 1] ? height[i] : sub[i + 1]; 
  }
  console.log('pre', pre, 'sub', sub, 'height', height);
  for (let i = 0; i < height.length; i += 1) {
      ans += (sub[i] > pre[i] ? pre[i] : sub[i]) - height[i];
  }
  return ans
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))