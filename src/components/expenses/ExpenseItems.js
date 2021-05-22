import React, { useState } from 'react';
import './ExpenseItems.css';
import FilterExpense from '../filter/FilterExpense';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

function ExpenseItems(props) {
  const [year, setYear] = useState('2020');
  const filterHandler = (year) => {
    setYear(year);
  };

  const filteredExpense = props.data.filter(
    (item) => String(item.date.getFullYear()) === year
  );

  return (
    <div className='expenses'>
      <FilterExpense selected={year} onFilter={filterHandler} />
      <ExpenseChart expenses={filteredExpense} />
      <ExpenseList items={filteredExpense} />
    </div>
  );
}

export default ExpenseItems;
