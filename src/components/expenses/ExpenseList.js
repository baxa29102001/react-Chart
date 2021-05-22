import React from 'react';
import './ExpenseList.css';
import ExpenseItem from '../expenses/ExpenseItem';

function ExpenseList(props) {
  if (props.items.length === 0) {
    return <h2 className='expense-noneItem'>Ooo... No items</h2>;
  }
  return (
    <ul className='expenses-list'>
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        );
      })}
    </ul>
  );
}

export default ExpenseList;
