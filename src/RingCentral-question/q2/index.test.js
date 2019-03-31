import sortExtensionsByExtType from "./index";

describe("sortExtensionsByExtType", () => {
  const extensions = [
    {
      extType: "AO"
    },
    {
      extType: "VitrualUser"
    },
    {
      extType: "DigitalUser"
    },
    {
      extType: "FaxUser"
    },
    {
      extType: "Dept"
    }
  ];

  const result = sortExtensionsByExtType(extensions);
  it("case1", () => {
    expect(result[0].extType).toBe("DigitalUser");
  });

  it("case1", () => {
    expect(result[1].extType).toBe("VitrualUser");
  });

  it("case1", () => {
    expect(result[2].extType).toBe("FaxUser");
  });

  it("case1", () => {
    expect(result[3].extType).toBe("AO");
  });

  it("case1", () => {
    expect(result[4].extType).toBe("Dept");
  });
});
