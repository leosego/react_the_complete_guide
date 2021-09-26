import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

import "./NewExpense.css";

const NewExpense = (props) => {
  return (
    <Card className="new-expense">
      <ExpenseForm onAddExpense={props.onAddExpense} />
    </Card>
  );
};

export default NewExpense;
