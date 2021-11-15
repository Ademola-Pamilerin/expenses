import Filter from "../filter/filter";
import "./expenses.css";
import { useState } from "react";
import ExpenseList from "./expenseList";
import ChartExpense from "./chartExpense";

const Expenses = (props) => {
const [year,setYear]=useState("2019")

const filter=(year)=>{
  setYear(year)
}
  const remained = props.expenses.filter((element) => {
      return element.date.getFullYear().toString() === year;
    });
      
  return (
    <div className="expenses">
      <Filter value={filter} />
      <ChartExpense expenses={remained}/>
      <ExpenseList remained={remained}/>
     </div>
  );
};
export default Expenses;
