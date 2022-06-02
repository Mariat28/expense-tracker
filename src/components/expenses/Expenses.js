//stateful/smart components

import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../expenseFilter/ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterExpensesHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div className="w-full p-1 flex  flex-col items-center gap-2">
      <div className="flex flex-col gap-2 items-end justify-end w-full p-2 ">
        <ExpenseFilter onFilterItemChange={filterExpensesHandler} selectedYear={filteredYear}/>
        {filteredExpenses.length === 0 ? <p className="text-white bg-red-500 h-20">No expenses found</p> : filteredExpenses.map(expense => <ExpenseItem
        key={expense.id}
        title = {expense.title}
        amount = {expense.amount}
        date = {expense.date}/>)}
      </div>
    </div>
  );
}
export default Expenses;
