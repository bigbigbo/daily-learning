import Sequence from "./index";

describe("Sequence", () => {
  it("case1", () => {
    const s1 = new Sequence();

    expect(s1.next()).toBe(1);
    expect(s1.next()).toBe(2);

    const s2 = new Sequence();

    expect(s2.next()).toBe(3);
    expect(s2.next()).toBe(4);
  });
});
