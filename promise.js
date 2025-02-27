Promise.myAll = (params) => {
  let res, rej;
  const p = new Promise((reslove, reject) => {
    res = reslove;
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
      if (fullfilled = i) {
        res[result];
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
    return new Promise((reslove, reject) => {
      this.taskList.push({
        task,
        reslove,
        reject
      });
      this._run()
    })
  }

  _run() {
    while(this.runningCount < this.maxCount && !!this.taskList.length) {
      const {task, reslove, reject} = this.taskList.shift()
      this.runningCount += 1
      Promise.resolve(task()).then(reslove, reject).finally(() => {
        this.runningCount -= 1
        this._run()
      })
    }
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

