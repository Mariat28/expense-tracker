import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
    if(props.filteredExpenses.length === 0){
      return <h2 className="text-white">found no expenses!</h2>
    }
    const classes = props.className;
    return(
        <ul className={classes}>
            {
                props.filteredExpenses.map((expense) => <ExpenseItem
                key={expense.id}
                title = {expense.title}
                amount = {expense.amount}
                date = {expense.date}/>)
            } 
        </ul>
    )
}
export default ExpensesList;