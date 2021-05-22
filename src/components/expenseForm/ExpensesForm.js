import React, { useState } from 'react';
import './ExpensesForm.css';

function ExpensesForm(props) {
  const [input, setInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const changeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let obj = {
      ...input,
      date: new Date(input.date),
    };
    setInput({
      title: '',
      amount: '',
      date: '',
    });
    props.onInputHandler(obj);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            name='title'
            value={input.title}
            onChange={changeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            name='amount'
            onChange={changeHandler}
            min='0.01'
            step='0.01'
            value={input.amount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            onChange={changeHandler}
            name='date'
            min='2019-01-01'
            max='2022-12-31'
            value={input.date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onShow}>
          Cansel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpensesForm;
