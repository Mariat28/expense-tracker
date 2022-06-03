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
     const closeFormHandler = () => {
         props.onCancelForm();
     }
    return(
        <div className="w-1/2">
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onClose={closeFormHandler}/>
        </div>
    )

}
export default NewExpense;