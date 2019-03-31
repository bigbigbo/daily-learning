export default function sumByQuarter(saleItems) {
  return saleItems.reduce((memo = [], item) => {
    const { month = 1, salePrice = 0 } = item;
    const quarter = parseInt((month - 0.1) / 3);

    if (!memo[quarter]) {
      memo[quarter] = { totalPrices: 0, transactionNums: 0 };
    }

    const transactionNums =
      salePrice !== 0
        ? memo[quarter].transactionNums + 1
        : memo[quarter].transactionNums;

    const totalPrices = memo[quarter].totalPrices + salePrice;

    memo[quarter] = {
      quarter: quarter + 1,
      totalPrices,
      transactionNums
    };

    return memo;
  }, []);
}
