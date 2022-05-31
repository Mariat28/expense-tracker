import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle(' updated !'); 
    console.log(title);
  }
  
  return (
    <div className="w-full">
      <Card className="flex justify-start bg-slate-500 text-white  mx-2">
        <div className="flex justify-between  p-2 gap-2 w-full items-center">
          <div className="flex items-center gap-2">
            <ExpenseDate date={props.date}/>
            <h2 className="font-semibold">{title}</h2>
          </div>
          <div className="flex  p-1 rounded-md text-slate-500 cursor-pointer items-center gap-2">
            <small className='bg-purple-900 text-white p-1 rounded-md border-white border cursor-pointer'>${props.amount}</small>
            <button className='rounded shadow-lg bg-white p-1' onClick={clickHandler}>Change Title</button>
          </div>
        </div>
      </Card>
      
    </div>
  );
}
export default ExpenseItem;
