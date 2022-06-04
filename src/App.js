import React, { useState } from 'react';
import { IoAdd } from 'react-icons/io5'
import './App.css';
import Card from './components/ui/Card';
import NewExpense from './components/newexpense/NewExpense';
import Expenses from './components/expenses/Expenses';
const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses);
  const [isAddFormOpen, setAddFormOpen] = useState(false);

  const addExpenseHandler = (expense) => {
    // for updating state that is dependent on a previous state
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    setAddFormOpen(false);
    console.log('expense data', expense);
  }
  const displayAddFormHandler = () => {
    setAddFormOpen(!isAddFormOpen);
  }
  // JSX alternative 
  // return React.createElement('div', {className: 'App flex flex-col gap-2 items-center w-full'}, React.createElement('h2', {}, 'expense tracker'), React.createElement(Card, {className: ' bg-black w-1/2 py-4 px-2'}, React.createElement(Expenses, {expenses:expenses})),)
  return (
    <div className="App flex flex-col  gap-2 items-center w-screen container mx-auto">
    {!isAddFormOpen ? (<div className='mt-2 w-full flex justify-end p-1'>
      <button
          type="button"
          className="bg-purple-300 text-purple-800 flex items-center  rounded-md px-2 py-1 hover:bg-purple-900 hover:text-purple-300 border hover:border-purple-900"
        onClick={displayAddFormHandler}><IoAdd ></IoAdd>Add New Expense</button>
      </div>) : ( <NewExpense onAddExpense = {addExpenseHandler} onCancelForm={displayAddFormHandler}/>) }
     
      <Card className=" bg-white mt-5 border-t border-l border-purple-500 w-full py-4 px-2">
        <Expenses expenses={expenses}/>
      </Card>
    </div>
  );
}

export default App;
