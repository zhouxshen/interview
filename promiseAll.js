Promise.myAll = (params) => {
  let res, rej;
  const p = new Promise((reslove, reject) => {
    res = reslove;
    rej = reject;
  });
  let i = 0;
  let fullfilled = 0;
  const result = [];
  for (const param of params) {
    const index = i;
    i ++
    Promise.resolve(param).then((data) => {
      result[index] = data;
      fullfilled ++;
      if (fullfilled = i) {
        res[result];
      }
    }).catch(err => rej(err))
  }
  if (i === 0) res([])
  return p
}

Promise.myAll([1,2,3,4, Promise.reject(1)]).then(
  res => console.log('success', res),
  error => console.log('error', error)
);