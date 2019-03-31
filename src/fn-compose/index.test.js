import compose from "./index";

describe("compose work well", () => {
  it("case1", () => {
    const add = x => x + 1;
    const multiply = (x, y) => x * y;
    const fn = compose(
      multiply,
      add
    );
    expect(fn(3, 4)).toBe(13);
  });
});
