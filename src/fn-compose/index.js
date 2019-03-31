const compose = (...fns) => (...args) => fns.reduce((f, g) => g(f(...args)));

// const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
export default compose;
