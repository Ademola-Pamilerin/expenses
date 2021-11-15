import ExpenseItem from "./ExpenseItem";
import './expenseList.css';
const ExpenseList=(props)=>{
  console.log(props.remained)
    if(props.remained.length === 0){
        return (
            <div className="empty-expense">No expense found</div>
        )
    }
    return(
      <div> {
props.remained.map((element) => (
    <ExpenseItem
      key={element.id}
      price={element.amount}
      title={element.title}
      date={element.date}
    />
  ))
}
  </div>
)
}
export default ExpenseList;