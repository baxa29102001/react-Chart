import React, { useState } from 'react';
import ModalExpense from '../Ui/ModalExpense';
import ExpenseForm from './ExpensesForm';
import './ExpensesInput.css';

function ExpensesInput(props) {
  const [show, setShow] = useState(false);
  const newExpenseHandler = (data) => {
    const newExpense = { ...data, id: Math.random() };
    props.onNewData(newExpense);
    setShow(!show);
  };
  const showHandler = () => {
    setShow(!show);
  };
  if (show) {
    return (
      <div className='new-expense'>
        <ExpenseForm onShow={showHandler} onInputHandler={newExpenseHandler} />
      </div>
    );
  } else {
    return (
      <div>
        <ModalExpense onShow={showHandler} />
      </div>
    );
  }
}

export default ExpensesInput;
