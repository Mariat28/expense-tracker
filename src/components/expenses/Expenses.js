import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../expenseFilter/ExpenseFilter";

const Expenses = (props) => {
  const [filterItem, setFilterItem] = useState('');

  const filterExpensesHandler = (selectedFilterItem) =>{
    setFilterItem(selectedFilterItem);
    console.log('selected year', filterItem);
  }
  return (
    <div className="w-full p-1 flex  flex-col items-center gap-2">
      <div className="flex justify-end w-full p-2 ">
        <ExpenseFilter onFilterItemChangeHandler={filterExpensesHandler}/>
        <div className="text-white font-bold">{filterItem}</div>
      </div>
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
    </div>
  );
}
export default Expenses;
