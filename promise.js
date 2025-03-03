Promise.myAll = (params) => {
  let res, rej;
  const p = new Promise((resolve, reject) => {
    res = resolve;
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
      if (fullfilled === i) {
        res(result);
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

function timeout(time) {
  return new Promise((reslove) => {
    setTimeout(reslove, time)
  })
}

class SuperTask {
  constructor(maxCount) {
    this.maxCount = maxCount
    this.taskList = []
    this.runningCount = 0;
  }

  add(task) {
    return new Promise((resolve, reject) => {
      this.taskList.push({
        task,
        resolve,
        reject
      });
      this._run()
    })
  }

  _run() {
    if (this.runningCount >= this.maxCount || this.taskList.length === 0) {
      return;
    }
    const {task, resolve, reject} = this.taskList.shift()
    this.runningCount += 1
    Promise.resolve(task()).then(resolve, reject).finally(() => {
      this.runningCount -= 1
      setTimeout(() => this._run(), 0)
    })
  }
}

const superTask = new SuperTask()

function addTask(time, name) {
  superTask
    .add(() => timeout(time))
    .then(() => {
      console.log( `task ${name} done`)
    })
}

const createTask = (name, time) => () =>
  new Promise((res) => setTimeout(() => {
    console.log(`Task ${name} completed`);
    res(name);
  }, time));

superTask.add(createTask("A", 3000));
superTask.add(createTask("B", 2000));
superTask.add(createTask("C", 1000));
superTask.add(createTask("D", 500));
