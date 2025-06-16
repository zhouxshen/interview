class EventBus {
  constructor () {
    this.events = {}
  }

  subscribe(name, handler) {
    if (!this.events[name]) {
      this.events[name] = []
    }
    this.events[name].push(handler)
  }

  emit(name, args) {
    if (this.events[name]) {
      this.events[name].forEeach(handler => handler(...args))
    }
  }

  cancel(name, handler) {
    if (!this.events[name]) return
    this.events[name] = this.events[name].filter(item => item !== handler)
  }
}

var p1 = new Promise((resolve, reject) => {
  console.log("p1");
  resolve(); // 修正：原来是 resolve);
});

var p2 = new Promise((resolve, reject) => {
  console.log("p2");
  resolve(); // 修正：原来是 resolve);
});

setTimeout(() => {
  console.log("setTimeout 1")
  p1.then(() => console.log("p1 then"));
  p2.then(() => console.log("p2 then"));
}, 0); // 修正：括号位置错误
setTimeout(() => console.log("setTimeout 2"), 0); // 修正：括号位置错误


