import React, { useState } from "react";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // OR 
    // setUserInput((prevState) => {
    //     return {...prevState,enteredTitle: event.target.value}
    // })
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

  };
  const submitHandler = (event) =>{
      event.preventDefault();
      const expenseData = {
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate),

      }
      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate( '');

  }
  return (
    <form className="border shadow-2xl mt-3 p-2" onSubmit={submitHandler}>
      <div className="flex flex-col w-full gap-2  rounded p-2">
        <div className="flex w-full items-center justify-start">
          <div className="w-1/6 flex justify-start font-semibold text-black">
            <label htmlFor="expense-title" className="w-fit">
              Title:
            </label>
          </div>
          <div className="w-5/6  flex justify-start ">
            <input
              type="text"
              id="expense-title"
              value= {enteredTitle}
              className="border w-full border-slate-500 p-2 shadow rounded focus:border focus:border-blue-600"
              onChange={titleChangeHandler}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-start">
          <div className="w-1/6  flex justify-start font-semibold text-black  ">
            <label htmlFor="expense-title" className="w-fit">
              Amount:
            </label>
          </div>
          <div className="w-5/6   flex justify-start ">
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              id="expense-amount"
              className="form-control border border-slate-500 shadow rounded focus:border focus:border-blue-600  w-full p-2"
              onChange={amountChangeHandler}
            />
          </div>
        </div>
        <div className="flex w-full  justify-start">
          <div className="w-1/6  flex justify-start items-center font-semibold text-black ">
            <label htmlFor="expense-title" className="w-fit">
              Date:
            </label>
          </div>
          <div className="w-5/6  flex justify-start ">
            <input
              type="date"
              id="expense-date"
              min="2022-01-01"
              value={enteredDate}
              max="2022-12-31"
              className="form-control border border-slate-500 w-full p-2 rounded shadow placeholder-transparent"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end m-2">
        <button
          type="submit"
          className="bg-black text-white rounded-md px-2 py-1 hover:bg-transparent hover:text-black border hover:border-black"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
