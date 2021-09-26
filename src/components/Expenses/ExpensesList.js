import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import "./ExpensesList.css";

const ExpenseList = (props) => {
  ///useState
  const [enteredFilterYear, setEnteredFilterYear] = useState("2020");

  const filterYearChangeHandler = (newFilterYear) => {
    console.log("new year: ");
    console.log(newFilterYear);

    setEnteredFilterYear(newFilterYear);
  };

  return (
    <div>
      <ExpensesFilter
        filterYearValue={enteredFilterYear}
        onFilterYearChange={filterYearChangeHandler}
      />

      <div className="expenses">
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
