import { useState } from "react";
import "./filter.css";
const Filter = (props) => {
  const [year, setYear] = useState(2019);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Year</label>
        <select
          value={year}
          onChange={(event) => {
            setYear(event.target.value);
            props.value(event.target.value);
            console.log(event.target.value);
          }}
        >
          <option value={2019}>2019</option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
        </select>
      </div>
    </div>
  );
};
export default Filter;
