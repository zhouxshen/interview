var o = (function(){
  var obj = {
    a: 1,
    b: 2,
  }
  return {
    get: function(k) {
      return obj[k]
    }
  }
})()

// 不修改上述代码，修改obj
Object.defineProperty(Object.prototype, 'hack', {
  get() {
    return this
  }
})

var obj = o.get('hack')
console.log(obj)
