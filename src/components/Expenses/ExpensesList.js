import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
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
    <Card className="expenses">
      <ExpensesFilter 
        filterYearValue={enteredFilterYear}
        onFilterYearChange={filterYearChangeHandler}
      />

      <div>
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </Card>
  );
};

export default ExpenseList;
