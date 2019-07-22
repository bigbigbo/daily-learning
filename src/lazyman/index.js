class LazyMan {
  constructor(name) {
    this.name = name;
    this.queue = [];

    this.sayHello();
    setTimeout(() => this.next());
  }

  next() {
    if (this.queue.length > 0) {
      const fn = this.queue.shift();
      // eslint-disable-next-line no-unused-expressions
      fn && fn();
    }
  }

  sayHello() {
    const fn = () => {
      console.log(`Hi! This is ${this.name}`);
      this.next();
    };
    this.queue.push(fn);
    return this;
  }

  eat(food) {
    const fn = () => {
      console.log(`Eat ${food}~`);
      this.next();
    };
    this.queue.push(fn);
    return this;
  }

  sleepFirst(time) {
    console.log(`wait ${time} s`);
    const fn = () => {
      setTimeout(() => this.next(), time * 1000);
    };
    this.queue.unshift(fn);
    return this;
  }

  sleep(time) {
    const fn = () => {
      setTimeout(() => {
        console.log(`sleep ${time} s`);
        this.next();
      }, time);
    };

    this.queue.push(fn * 1000);

    return this;
  }
}

class LazyMan2 {
  constructor(name) {
    this.name = name;
    this._preSleepTime = 0;
    this.sayName = this.sayName.bind(this);
    this.p = Promise.resolve()
      .then(() => {
        if (this._preSleepTime > 0) {
          return this.holdOn(this._preSleepTime);
        }
      })
      .then(this.sayName);
  }

  sayName() {
    console.log(`Hi! this is ${this.name}!`);
  }

  holdOn(time) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`Wake up after ${time} second`);
        resolve();
      }, time * 1000);
    });
  }

  sleep(time) {
    this.p = this.p.then(() => this.holdOn(time));
    return this;
  }

  eat(meal) {
    this.p = this.p.then(() => {
      console.log(`eat ${meal}`);
    });
    return this;
  }

  sleepFirst(time) {
    this._preSleepTime = time;
    return this;
  }
}

class LazyMan3 {
  constructor(name) {
    this.name = name;
    this.sayName = this.sayName.bind(this);
    this.queue = [this.sayName];
    Promise.resolve().then(() => this.callByOrder(this.queue));
  }

  callByOrder(queue) {
    let sequence = Promise.resolve();
    console.log("this.queue", this.queue);
    this.queue.forEach(item => {
      sequence = sequence.then(item);
    });
  }

  sayName() {
    return new Promise(resolve => {
      console.log(`Hi! this is ${this.name}!`);
      resolve();
    });
  }

  holdOn(time) {
    return () =>
      new Promise(resolve => {
        setTimeout(() => {
          console.log(`Wake up after ${time} second`);
          resolve();
        }, time * 1000);
      });
  }

  sleep(time) {
    this.queue.push(this.holdOn(time));
    return this;
  }

  eat(meal) {
    this.queue.push(() => {
      console.log(`eat ${meal}`);
    });
    return this;
  }

  sleepFirst(time) {
    this.queue.unshift(this.holdOn(time));
    return this;
  }
}

const boy = new LazyMan2("cxk");

boy
  .eat("noodles")
  .sleep(2)
  .eat("apple")
  .sleepFirst(3);

// 等待 3000 ms
// eat noodles
// 等待 2000 ms
// eat apple
