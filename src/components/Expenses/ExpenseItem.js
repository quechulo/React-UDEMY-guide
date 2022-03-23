import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  let expenseTitle = props.title;
  const expenseAmount = props.amount;

  const clickHandler = (props) => {
    expenseTitle = 'Updated!!!';
    console.log('Updated!');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>-Change title-</button>
    </Card>
  );
}

export default ExpenseItem;
