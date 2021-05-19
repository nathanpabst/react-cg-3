import React from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = (props) => {
  const saveFilteredYearHandler = (enteredYearData) => {
    const yearData = {
      ...enteredYearData,
      id: Math.random().toString(),
    };

    console.log('from expenses: year selected', yearData);
  };

  return (
    <div>
      <ExpenseFilter onSaveYearData={saveFilteredYearHandler}/>
      <Card className='expenses'>
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;

// Keep the expenses data in the App component and pass that data into the newly created component
