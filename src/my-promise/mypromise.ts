type PromiseStatus = "pending" | "fulfilled" | "rejected";

type subscriber = {
  onFulfilled(): any;
  onRejected(): any;
};

function isObjectOrFunction(o) {
  return typeof o === "object" || typeof o === "function";
}

class MyPromise {
  constructor(fn) {
    try {
      fn(this.resolvePromise.bind(this), this.rejectPromise.bind(this));
    } catch (e) {
      this.rejectPromise(e);
    }
  }

  private "[[PromiseValue]]" = undefined;
  private "[[PromiseStatus]]": PromiseStatus = "pending";

  private subscribers: subscriber[] = [];

  private asap(callback) {
    setTimeout(() => {
      callback.call(this);
    }, 1);
  }

  private resolvePromise(value) {
    if (value instanceof MyPromise) {
      return value.then(this.resolvePromise.bind(this), this.rejectPromise.bind(this));
    }

    this["[[PromiseStatus]]"] = "fulfilled";
    this["[[PromiseValue]]"] = value;

    this.publish();
  }

  private rejectPromise(reason) {
    this["[[PromiseStatus]]"] = "rejected";
    this["[[PromiseValue]]"] = reason;

    this.publish();
  }

  private publish() {
    if (this.subscribers.length === 0) return;
    const [{ onFulfilled, onRejected }] = this.subscribers;
    const cb =
      this["[[PromiseStatus]]"] === "fulfilled" ? onFulfilled : onRejected;
    cb();
  }

  public then(onFulfilled?, onRejected?) {
    if (typeof onFulfilled !== "function") {
      onFulfilled = (v: any) => v;
    }
    if (typeof onRejected !== "function") {
      onRejected = (e: any) => {
        throw e;
      };
    }

    let promise2;

    promise2 = new MyPromise((resolve, reject) => {
      if (this["[[PromiseStatus]]"] !== "pending") {
        this.asap(() => {
          try {
            const cb =
              this["[[PromiseStatus]]"] === "fulfilled"
                ? onFulfilled
                : onRejected;
            const x = cb.call(null, this["[[PromiseValue]]"]);
            this["[[Resolve]]"](promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      } else {
        this.subscribers.push({
          onFulfilled: () => {
            try {
              const x = onFulfilled.call(null, this["[[PromiseValue]]"]);
              this["[[Resolve]]"](promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          },
          onRejected: () => {
            try {
              const x = onFulfilled.call(null, this["[[PromiseValue]]"]);
              this["[[Resolve]]"](promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }
        });
      }
    });

    return promise2;
  }

  private "[[Resolve]]"(promise, x, resolvePromise, rejectPromise) {
    if (promise === x) {
      return rejectPromise(new TypeError("Error"));
    }

    if (x instanceof MyPromise) {
      if (x["[[PromiseStatus]]"] === "pending") {
        x.then(value => {
          this["[[Resolve]]"](promise, value, resolvePromise, rejectPromise);
        }, rejectPromise);
      } else {
        x.then(resolvePromise, rejectPromise);
      }
      return;
    }

    if (isObjectOrFunction(x)) {
      let then;
      let called = false;
      try {
        then = x.then;
      } catch (e) {
        return rejectPromise(e);
      }

      if (typeof then === "function") {
        try {
          then.call(
            x,
            y => {
              console.log('called:', called)
              if (called) return;
              called = true;
              this["[[Resolve]]"](promise, y, resolvePromise, rejectPromise);
            },
            r => {
              if (called) return;
              called = true;
              rejectPromise(r);
            }
          );
        } catch (e) {
          if (called) return;
          rejectPromise(e);
        }
      }
    } else {
      resolvePromise(x);
    }
  }
}
const sleep = t => new MyPromise(resolve => setTimeout(resolve, t));
// const sleep = t => new MyPromise(resolve => resolve(t));
console.log("begin");

// sleep(2000)
//   .then(() => {
//     console.log("sleep 2000 ms");
//     return "bobo";
//   })
//   .then(value => {
//     console.log("my name is", value);
//     return sleep(2000);
//   })
//   .then(v => {
//     console.log("v", v);
//     console.log("another 2000 ms is over");
//   });

// const promise = sleep(2000).then(() => {
//   return sleep(3000).then(() => console.log('inner'))
// }).then(() => console.log('outer'))

// new MyPromise(resolve => {
//   resolve(sleep(2000).then(() => console.log('inner')))
// }).then(() => console.log('outer'))

// new MyPromise(resolve => {
//   resolve(sleep(2000).then(() => console.log('inner')))
// }).then(() => {
//   console.log('outer')
//   // const onFulfilled = y => console.log('thenable:', y)
//   return {
//     then(onFulfilled, onRejected) {
//       onFulfilled({
//         then(fn) {
//           fn(6666)
//         }
//       })
//     }
//   }
// })
// .then(value => {
//   console.log('last:', value)
// })
