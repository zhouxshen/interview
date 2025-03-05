function myInstanceof (obj, func) {
  let proto = obj.__proto__;
  const prototype = func.prototype;
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true
    proto = proto.__proto__;
  }
}

function F() {
}

const f = new F();

console.log(myInstanceof(1, F));
