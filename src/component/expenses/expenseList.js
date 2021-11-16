import ExpenseItem from "./ExpenseItem";
import "./expenseList.css";
const ExpenseList = (props) => {
  console.log(props.remained);
  if (props.remained.length === 0) {
    return <div className="empty-expense">No expense found</div>;
  }
  return (
    <div>
      {" "}
      {props.remained.map((elements) => (
        <ExpenseItem
          key={elements.id}
          price={elements.amount}
          title={elements.title}
          date={elements.date}
        />
      ))}
    </div>
  );
};
export default ExpenseList;
