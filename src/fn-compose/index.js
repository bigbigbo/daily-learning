const compose = (...fns) => (...args) => fns.reduce((f, g) => g(f(...args)));

export default compose;
