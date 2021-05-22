import React from 'react';
import './ModalExpense.css';

function ModalExpense(props) {
  return (
    <div className='new-expense'>
      <button type='button' onClick={props.onShow}>
        Add Expense
      </button>
    </div>
  );
}

export default ModalExpense;
