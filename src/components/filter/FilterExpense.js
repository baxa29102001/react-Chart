import React from 'react';
import './FilterExpense.css';

function FilterExpense(props) {
  const changeHandler = (e) => {
    props.onFilter(e.target.value);
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={changeHandler}>
          <option value='2022'>2018</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
}

export default FilterExpense;
