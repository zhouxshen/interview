const deepClone = (obj) => {
  return new Promise((reslove) => {
    const {port1, port2} = new MessageChannel();
    port2.onmessage = e => reslove(e.data);
    port1.postMessage(obj);
  })
}

var b = {
  a: 1
}

b.c = b;

const clone = await deepClone(b);

const deepCopy = (obj, hash = new WeakMap()) => {
  if (typeof obj !== 'object' || obj == null)
    return obj
  if (hash.has(obj))
    return hash.get(obj)
  const target = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const val = obj[key];
      if (typeof val === 'object' && val != null) {
        target[key] = deepClone(val, hash);
      } else {
        target[key] = val;
      }
    }
  }
  return target
}