import React from "react";

const ExpenseForm = () => {
    return(
        <form className="bg-purple-400">
            <div className="flex flex-col w-full gap-2  rounded p-2">
                <div className="rounded p-1 flex gap-2 ">
                    <label htmlFor="expense-title">Title:</label>
                    <input type="text" id="expense-title" className="form-control border border-slate-500" />
                </div>
                <div className="rounded p-1 flex gap-2">
                    <label htmlFor="expense-amount">Amount:</label>
                    <input type="number" min="0.01" step="0.01" id="expense-amount" className="form-control border border-slate-500" />
                </div>
                <div className="rounded p-1 flex gap-2">
                    <label htmlFor="expense-date">Date</label>
                    <input type="date" id="expense-date" min="2022-01-01" max="2022-12-31" className="form-control border border-slate-500"/>
                </div>
            </div>
            <div>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;