// export default class Sequence {
//   static count = 0;

//   next() {
//     return ++Sequence.count;
//   }
// }

const Sequence = (function() {
  function _Sequence() {
    this.count = 0;

    return {
      next: () => ++this.count
    };
  }
  let instance = null;

  return function() {
    if (instance) return instance;

    instance = new _Sequence();
    return instance;
  };
})();

export default Sequence;
