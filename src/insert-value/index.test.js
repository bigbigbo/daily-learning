import insertValue from "./index";

describe("insert value", () => {
  it("case1 it should work well", () => {
    const input1 = ["A1", "A2", "A3", "B1", "B2", "C1", "C2", "D1", "D2", "D3"];
    const case1 = insertValue(input1);

    expect(case1[3]).toBe("A");
    expect(case1[6]).toBe("B");
    expect(case1[9]).toBe("C");
    expect(case1[13]).toBe("D");
  });

  it("case2 it should work well", () => {
    const input2 = ["A1", "B1", "C1", "D1"];
    const case2 = insertValue(input2);

    expect(case2[1]).toBe("A");
    expect(case2[3]).toBe("B");
  });
});
