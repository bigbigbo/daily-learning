import sumByQuarter from "../ls-q3";

export default function averageByQuarter(saleItems) {
  return sumByQuarter(saleItems).map(({ totalPrices, ...restProps }) => ({
    ...restProps,
    averagePrices: totalPrices / restProps.transactionNums
  }));
}
