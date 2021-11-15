import "./ExpenseItem.css";
import Card from "../UI/card/card";
import Date from "../UI/date/date";
const ExpenseItem = (props) => {
  return (
    <li>
    <Card className="expense-item">
      <div>
        <Date date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.price+"$"}</div>
    </Card></li>
  );
};
export default ExpenseItem;
