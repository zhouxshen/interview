/**
 * 找出数组里出现超过一半次数的数
 */

const findItem = (arr) => {
  let x = 0;
  let vote = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (vote === 0) x = arr[i];
    vote += x === arr[i] ? 1 : -1;
  }
  return x
}

//
const findeItem = (arr) => {
  let x;
  let y;
  let vote_x = 0;
  let vote_y = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    console.log('item', item, 'x', x, vote_x, 'y', y, vote_y)
    if (x === item) {
      vote_x ++
    } else if (y === item) {
      vote_y ++
    } else if (!vote_x) {
      x = item;
      vote_x ++
    } else if (!vote_y) {
      y = item;
      vote_y ++
    } else {
      vote_x --
      vote_y --
    }
  }
  return [x, y]
}

const findeItem4 = (arr) => {
  let x;
  let y;
  let z;
  let vote_x = 0;
  let vote_y = 0;
  let vote_z = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    if (x === item) {
      vote_x ++
    } else if (y === item) {
      vote_y ++
    } else if (z === item) {
      vote_z ++
    } else if (!vote_x) {
      x = item;
      vote_x ++
    } else if (!vote_y) {
      y = item;
      vote_y ++
    } else if (!vote_z) {
      z = item;
      vote_z ++
    } else {
      vote_x --
      vote_y --
      vote_z --
    }
  }
  return [x, y, z]
}

const findeItemN = (arr, n) => {
  const ans = new Array(n);
  let votes = new Array(n).fill(0);
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    const index = ans.indexOf(item);
    if (index !== -1) {
      votes[index] = votes[index] + 1
    } else if (votes.indexOf(0) !== -1) {
      ans[votes.indexOf(0)] = item
      votes[votes.indexOf(0)] = 1;
    } else {
      votes = votes.map(item => item -1)
    }
  }
  return ans
}


const deepClone = (obj, hash = new WeakMap()) => {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  if (hash.has(obj)) {
    return hash.get(obj)
  }
  const target = Array.isArray(obj) ? [] : {};
  hash.set(obj, target)
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const val = obj[key]
      if (typeof val === 'object' && val != null) {
        target[key] = deepClone(val, hash)
      } else {
        target[key] = val
      }
    }
  }
  return target
}
