import "./date.css";
const Date = (props) => {
  return (
    <div className="expense-date">
      <div className="expense-date__day">{props.date.getDate() + "th"}</div>
      <div className="expense-date__month">{props.date.toLocaleString("en-US", { month: "long" })}</div>
      <div className="expense-date__year">{props.date.getFullYear()}</div>
    </div>
  );
};
export default Date;
