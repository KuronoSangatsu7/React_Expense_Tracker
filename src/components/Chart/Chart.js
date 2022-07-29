import TransparentWrapper from "../UI/TransparentWrapper";
import ChartBar from "./ChartBar";

const Chart = () => {
  let arr = Array.apply(null, Array(12)).map(function () {});
  
  return (
    <TransparentWrapper>
      <div className="flex flex-nowrap">
        {arr.map(item => <ChartBar key={Math.random()}/>)}
      </div>
    </TransparentWrapper>
  );
};

export default Chart;
