class TnT {
  constructor(fn) {
    fn();
  }
}

const tnt = new TnT(() => {
  console.log("tnt:", tnt); // ReferenceError: tnt is not defined
});

const fn = function foo() {
  console.log("fn:", fn);
};
fn(); //fn: function foo() {console.log("fn:", fn);}
let promise;
promise = new Promise(resolve => {
  console.log("promise=>", promise);
  if (promise) {
    resolve(true);
  } else {
    reject(false);
  }
});
