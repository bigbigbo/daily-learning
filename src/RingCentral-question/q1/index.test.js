import sortExtensionsByName from "./index";

describe("it will work well", () => {
  it("case1", () => {
    const extensions = [
      { firstName: "ccc", lastName: "aaa", ext: "aaa" },
      { firstName: "bbb", lastName: "aaa", ext: "aaa" },
      { firstName: "aaa", lastName: "aaa", ext: "aaa" }
    ];
    const result = sortExtensionsByName(extensions);
    expect(result[0].firstName).toBe("aaa");
    expect(result[1].firstName).toBe("bbb");
    expect(result[2].firstName).toBe("ccc");
  });

  it("case2", () => {
    const extensions = [
      { firstName: "aaa", lastName: "bbb", ext: "aaa" },
      { firstName: "aaa", lastName: "ccc", ext: "aaa" },
      { firstName: "aaa", lastName: "aaa", ext: "aaa" }
    ];
    const result = sortExtensionsByName(extensions);
    expect(result[0].lastName).toBe("aaa");
    expect(result[1].lastName).toBe("bbb");
    expect(result[2].lastName).toBe("ccc");
  });

  it("case3", () => {
    const extensions = [
      { firstName: "aaa", lastName: "bbb", ext: "ccc" },
      { firstName: "aaa", lastName: "bbb", ext: "bbb" },
      { firstName: "aaa", lastName: "bbb", ext: "aaa" }
    ];
    const result = sortExtensionsByName(extensions);
    expect(result[0].ext).toBe("aaa");
    expect(result[1].ext).toBe("bbb");
    expect(result[2].ext).toBe("ccc");
  });

  it("case4", () => {
    const extensions = [
      { firstName: "abc", lastName: "bbb", ext: "ccc" },
      { firstName: "aab", lastName: "bbb", ext: "bbb" },
      { firstName: "aab", lastName: "bdb", ext: "aaa" }
    ];
    const result = sortExtensionsByName(extensions);
    expect(result[0].firstName).toBe("aab");
    expect(result[1].lastName).toBe("bdb");
    expect(result[2].firstName).toBe("abc");
  });
});
