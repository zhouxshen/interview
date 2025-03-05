/**
9. 回文数

给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
例如，121 是回文，而 123 不是。
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false
  let reverseNumber = 0;
  while (x > reverseNumber) {
      reverseNumber = reverseNumber * 10 + x % 10;
      x = Math.floor(x / 10)
  }
  return x === reverseNumber || x === Math.floor(reverseNumber / 10)
};