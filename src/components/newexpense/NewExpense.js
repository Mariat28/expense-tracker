import React from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) =>{
     const saveExpenseDataHandler = (enteredExpenseData) => {
         const expenseData = {
             ...enteredExpenseData,
             id: Math.random().toString(),
         }
         props.onAddExpense(expenseData);

     }
    return(
        <div className="w-1/2">
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    )

}
export default NewExpense;