import bubbleSort from "./index";

describe("bubble sort test", () => {
  it("case1", () => {
    const arr = [2, 3, 1, 6, 3, 888, 4567, 23, 1, 9, 10];

    const result = bubbleSort(arr);
    expect(arr[0]).toBe(1);
    expect(arr[result.length - 1]).toBe(4567);
  });
});
