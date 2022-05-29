import ExpenseItem from "./ExpenseItem";
const Expenses = (props) => {
  return (
    <div className="w-full p-1 flex flex-col items-center gap-2">
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
    </div>
  );
}
export default Expenses;
