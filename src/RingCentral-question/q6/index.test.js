import getUnUsedKeys from "./index";

describe("getUnUsedKeys", () => {
  it("case1", () => {
    const allKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const usedKeys = [1, 4, 5, 6];

    const result = getUnUsedKeys(allKeys, usedKeys);

    expect(result).toEqual([0, 2, 3, 7, 8, 9]);
  });

  it("case2", () => {
    const allKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const usedKeys = "1, 4, 5, 6";

    const result = getUnUsedKeys(allKeys, usedKeys);

    expect(result).toEqual([]);
  });

  it("case3", () => {
    const allKeys = "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]";
    const usedKeys = "1, 4, 5, 6";

    const result = getUnUsedKeys(allKeys, usedKeys);

    expect(result).toEqual([]);
  });
});
