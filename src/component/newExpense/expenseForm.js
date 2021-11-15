import "./expenseForm.css";
import { useState } from "react";
import Utility from "../shared/shared";

const ExpenseForm = (props) => {
  const [show, setShow] = useState(false);
  const [touched, setTouched] = useState(false);
  const [data, setData] = useState({
    title: "",
    date: "",
    amount: "",
  });
  const clicked = () => {
    if(touched===true){
      setData({
        title: "",
        date: "",
        amount: "",
      });
      setTouched(false)
    }
    else{
      setShow(false)
    }
  };
  const addForm = () => {
    setShow(true);
    setTouched(false);
  };
  const submitted = (event) => {
    event.preventDefault();
    const formData = {
      title: data.title,
      date: new Date(data.date),
      amount: data.amount,
    };
    props.submit(formData)
    setTouched(false)
    setData({
      title: "",
      date: "",
      amount: "",
    });
    console.log(formData);
  };
  return (
    <form onSubmit={submitted}>
      {show ? (
        <div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
              value={data.title}
                onChange={(event) => {
                  setTouched(true);
                  setData((prevState) =>
                    Utility(prevState, { title: event.target.value })
                  );
                }}
                type={"text"}
                autoFocus
                required
              />
            </div>
            <div className="new-expense__control">
              <label>Price</label>
              <input
              value={data.amount}
                type={"number"}
                min={"0.01"}
                step={"0.01"}
                onChange={(event) => {
                  setTouched(true);
                  setData((prevState) =>
                    Utility(prevState, { amount: event.target.value })
                  );
                }}
                required
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
              value={data.date}
                type={"date"}
                min={"2019-01-01"}
                max={"2022-12-31"}
                onChange={(event) => {
                  setTouched(true);
                  setData((prevState) =>
                    Utility(prevState, { date: event.target.value })
                  );
                }}
                required
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
            <button type={"reset"} onClick={clicked}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="new-expense__actions">
          <button onClick={addForm}>Add New Expense</button>
        </div>
      )}
    </form>
  );
};
export default ExpenseForm;
