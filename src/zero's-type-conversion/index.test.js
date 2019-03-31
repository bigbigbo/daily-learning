test("it should be type conversion", () => {
  /* eslint-disable eqeqeq */
  expect(0 == "0").toBeTruthy();

  expect(null > 0).toBeFalsy();

  expect(null == 0).toBeFalsy();

  expect(null >= 0).toBeTruthy();
});
