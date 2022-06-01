import React from 'react';
import './App.css';
import Card from './components/ui/Card';
import NewExpense from './components/newexpense/NewExpense';
import Expenses from './components/expenses/Expenses';
const App = () => {
  const expenses = [
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
  const addExpenseHandler = (expense) => {
    console.log('expense data', expense);
  }
  // JSX alternative 
  // return React.createElement('div', {className: 'App flex flex-col gap-2 items-center w-full'}, React.createElement('h2', {}, 'expense tracker'), React.createElement(Card, {className: ' bg-black w-1/2 py-4 px-2'}, React.createElement(Expenses, {expenses:expenses})),)
  return (
    <div className="App flex flex-col gap-2 items-center w-full">
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Card className=" bg-black w-1/2 py-4 px-2">
        <Expenses expenses={expenses}/>
      </Card>
    </div>
  );
}

export default App;
