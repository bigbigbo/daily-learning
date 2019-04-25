const promise = new Promise((resolve, reject) => {
  console.log("promise=>", promise);
  if (promise) {
    resolve(true);
  } else {
    reject(new Error("fuck"));
  }
});
