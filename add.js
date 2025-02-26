// add[1][2][3] + 4 = 10
// add[100][200][300] = 600
function createProxy(value = 0) {
  const valueGetter = () => value;
  return new Proxy(
    {},
    {
      get(target, prop) {
        if (prop === Symbol.toPrimitive) {
          return valueGetter
        }
        return createProxy(value + Number(prop))
      }
    }
  )
}

const add = createProxy()

console.log(add[1][2][3] + 4)