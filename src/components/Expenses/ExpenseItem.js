import React, { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log('expenseItem evaluated by React');
  const expenseAmount = props.amount;

  const clickHandler = (props) => {
    setTitle('Updated!!!');
    console.log(title); // see that if prints old title!
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>-Change title-</button>
    </Card>
  );
}

export default ExpenseItem;
