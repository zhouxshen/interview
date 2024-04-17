const flat = (arr) => {
  const queue = [...arr];
  const res = [];
  while (queue.length) {
    const node = queue.shift();
    if (Array.isArray(node)) {
      queue.unshift(...node)
    } else {
      res.push(node)
    }
  }

  const uArr = Array.from(new Set(res))
  const sortArr = uArr.sort((a, b) => a - b);

  return sortArr;
}

console.log(flat([1, 2, [3, 4, [5, 6], 7], [8, 9]]));