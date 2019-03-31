import sumByQuarter from "./index";

describe("sumByQuarter", () => {
  const data = [
    {
      month: 1,
      date: 21,
      transationId: "1",
      salePrice: 123
    },
    {
      month: 3,
      date: 21,
      transationId: "2",
      salePrice: 222
    },
    {
      month: 4,
      date: 21,
      transationId: "3",
      salePrice: 10
    },
    {
      month: 5,
      date: 21,
      transationId: "4",
      salePrice: 21
    },
    {
      month: 6,
      date: 21,
      transationId: "44",
      salePrice: 0
    },
    {
      month: 8,
      date: 21,
      transationId: "5",
      salePrice: 100
    },
    {
      month: 9,
      date: 21,
      transationId: "6",
      salePrice: 100
    },
    {
      month: 10,
      date: 21,
      transationId: "7",
      salePrice: 31
    },
    {
      month: 12,
      date: 21,
      transationId: "8",
      salePrice: 32
    }
  ];

  const result = sumByQuarter(data);

  it("q1", () => {
    expect(result[0]).toEqual({
      quarter: 1,
      totalPrices: 345,
      transactionNums: 2
    });
  });

  it("q2", () => {
    expect(result[1]).toEqual({
      quarter: 2,
      totalPrices: 31,
      transactionNums: 2
    });
  });

  it("q3", () => {
    expect(result[2]).toEqual({
      quarter: 3,
      totalPrices: 200,
      transactionNums: 2
    });
  });

  it("q4", () => {
    expect(result[3]).toEqual({
      quarter: 4,
      totalPrices: 63,
      transactionNums: 2
    });
  });
});
