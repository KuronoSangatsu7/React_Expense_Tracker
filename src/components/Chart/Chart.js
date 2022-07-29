import TransparentWrapper from "../UI/TransparentWrapper";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  let totalSum = 0;
  let monthlySum = {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  };
  let monthlyPercentages = {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  };

  for (let expense of props.expenses) {
    totalSum += parseInt(expense.amount);
    let expenseMonth = expense.date.toLocaleString("en-US", { month: "short" });
    monthlySum[expenseMonth] += parseInt(expense.amount);
  }

  for (let month of Object.keys(monthlySum)) {
    let percentage =
      totalSum > 0 ? Math.round((monthlySum[month] / totalSum) * 100) : 0;
    monthlyPercentages[month] = percentage;
  }

  const chartContent = Object.keys(monthlyPercentages).map((month) => (
    <ChartBar key={month} percentage={monthlyPercentages[month]} month={month} />
  ));

  return (
    <div className="hidden xl:block">
    <TransparentWrapper>
      <div className="flex flex-nowrap">
      {chartContent}
      </div>
    </TransparentWrapper>
    </div>
  );
};

export default Chart;
