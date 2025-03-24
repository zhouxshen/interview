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
    const TimeoutPromise = () => {
      return new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('time out'))
        }, 500)
      })
    }
    Promise.race([TimeoutPromise(), Promise.resolve(task())]).then(resolve, reject).finally(() => {
      this.runningCount -= 1
      setTimeout(() => this._run(), 0)
    })
  }
}

const superTask = new SuperTask()

const createTask = (name, time) => () =>
  new Promise((res) => setTimeout(() => {
    console.log(`Task ${name} completed`);
    res(name);
  }, time));

superTask.add(createTask("A", 3000));
superTask.add(createTask("B", 2000));
superTask.add(createTask("C", 1000));
superTask.add(createTask("D", 500));
