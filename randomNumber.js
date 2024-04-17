/**
 * 随机获取一个[min, max]的正整数
 */

function getRandomNumber(min, max) {
  return Math.floor(Math.random()*(max + 1 - min) + min)
}

console.log(getRandomNumber(1,4))
