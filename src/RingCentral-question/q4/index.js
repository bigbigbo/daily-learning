import sumByQuarter from "../q3";

export default function averageByQuarter(saleItems) {
  return sumByQuarter(saleItems).map(({ totalPrices, ...restProps }) => ({
    ...restProps,
    averagePrices: totalPrices / restProps.transactionNums
  }));
}
