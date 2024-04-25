const arrayToTree = (arr) => {
    const roots = arr.filter(item => !item.pid);
    const map = new Map()

    arr.forEach(item => {
        const pid = item.pid;
        if (!map.has(pid)) {
            map.set(pid, [])
        }
        map.get(pid).push(item);
    })

    const addChild = (items) => {
        items.forEach(item => {
            const child = map.get(item.id);
            if (child) {
                item.child = addChild(child)
            }
        })
          
        return items
    }

    return addChild(roots)
}

const arrs = [
    {id: 1, text: '1', pid: null},
    {id: 2, text: '2', pid: 1},
    {id: 3, text: '3', pid: 1},
    {id: 4, text: '4', pid: 2},
    {id: 5, text: '5', pid: 4},
    {id: 6, text: '6', pid: 3},
    {id: 7, text: '7', pid: 3},
]

console.log(arrayToTree(arrs));