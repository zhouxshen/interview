// 对指定数组生成树形结构
// 如下数据，如果有pid表示父节点，如果没有表示根节点

let origin = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 11, pid: 1 },
  { id: 12, pid: 1 },
  { id: 112, pid: 11 },
  { id: 21, pid: 2 },
  { id: 31, pid: 3 }
];

function buildTree(data) {
  const idMap = new Map();
  const result = [];

  // 第一次遍历，先构建一个 id 到节点的映射
  for (const item of data) {
    idMap.set(item.id, { ...item, children: [] });
  }

  // 第二次遍历，构建树结构
  for (const item of data) {
    const node = idMap.get(item.id);
    if (item.pid) {
      const parent = idMap.get(item.pid);
      if (parent) {
        parent.children.push(node);
      }
    } else {
      result.push(node);
    }
  }

  return result;
}

const flatTree = (arr) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i += 1) {
    map.set(arr[i].id, {
      ...arr[i],
      children: []
    })
  }
  const res = []
  for (let i = 0; i < arr.length; i += 1) {
    const item = map.get(arr[i].id)
    if (item.pid) {
      map.get(item.pid).children.push(item)
    } else {
      res.push(item)
    }
  }
  return res
}

console.log(flatTree(origin))