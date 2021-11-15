import ExpenseForm from "./expenseForm";
import "./newExpense.css";
const NewExpense = (props) => {
  const test = (params) => {
    props.data(params);
  };
  return (
    <div className="new-expense">
      <ExpenseForm submit={test} />
    </div>
  );
};
export default NewExpense;
