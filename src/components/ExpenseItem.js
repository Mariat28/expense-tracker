import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="w-full">
      <div className="flex justify-start shadow-xl bg-slate-500 text-white rounded-md mx-2">
        <div className="flex justify-between  p-2 gap-2 w-full items-center">
          <div className="flex items-center gap-2">
            <ExpenseDate date={props.date}/>
            <h2 className="font-semibold">{props.title}</h2>
          </div>
          <div className="flex bg-white p-1 rounded-md text-slate-500 cursor-pointer">
            <small>${props.amount}</small>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default ExpenseItem;
