//stateful/smart components

import { useState } from "react";
import ExpenseFilter from "../expenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpenseChart";

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
      <div className="flex flex-col gap-2  w-full p-0 ">
        <div className="flex justify-end">
          <ExpenseFilter onFilterItemChange={filterExpensesHandler} selectedYear={filteredYear}/>
        </div>
        <div className="w-full">
          <ExpensesChart expenses={filteredExpenses}/>
        </div>
        <li className="w-full">
        {/* {filteredExpenses.length === 0 && <p className="text-white ">No expenses found!</p>} */}
          <ExpensesList filteredExpenses={filteredExpenses} className="flex flex-col gap-2 items-start"/>
        </li>

      </div>
    </div>
  );
}
export default Expenses;
