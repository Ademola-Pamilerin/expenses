import "./chart.css";
import ChartBar from "./chartBar";

const Chart = (props) => {
    const valueArray=props.dataPoints.map((data)=>data.value);
    console.log(valueArray)
    const total=Math.max(...valueArray)
    console.log(total)
  return (
    <div className="chart">
      {props.dataPoints.map((expense) => (
        <ChartBar
          key={expense.label}
          value={expense.value}
          maxValue={total}
          label={expense.label}
        />
      ))}
    </div>
  );
};
export default Chart;
