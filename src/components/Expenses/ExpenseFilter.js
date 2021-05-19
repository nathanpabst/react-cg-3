import React, { useState } from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const [selectedYear, setSelectedYear] = useState('');

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
    console.log('from EF...Year selected: ');
  };

  const yearData = { year: selectedYear };

  props.onSaveYearData(yearData);

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select>
          <option value={selectedYear} onChange={yearChangeHandler}>
            2022
          </option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
