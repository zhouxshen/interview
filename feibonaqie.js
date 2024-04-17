const fn = (n) => {
  let dp0 = 0;
  let dp1 = 1;
  if (n === 0) return 0;
  if (n === 1) return 1;
  for (let i = 2; i <= n; i += 1) {
    const temp = dp0;
    dp0 = dp1;
    dp1 = dp0 + temp;
  }
  return dp1
}


console.log(fn(10))
console.log([1,2,3,4,5].at(-1))