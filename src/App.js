import { useState } from "react";
import Expenses from "./component/expenses/Expenses";
import NewExpense from "./component/newExpense/newExpense";
import Card from "./component/UI/card/card";
const dummy=[
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(Date.now()),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(Date.now()),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(Date.now()),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(Date.now()),
  },
]
function App() {
  const [expenses, setExpenses] = useState(dummy);
  const submitted = (params) => {
    setExpenses((prevstate) => {
      return [...prevstate,{...params,id:new Date().getSeconds()}];
    });
  };
  
  return (
    <Card>
      <NewExpense data={submitted} />
      <Expenses expenses={expenses} />
    </Card>
  );
}

export default App;
