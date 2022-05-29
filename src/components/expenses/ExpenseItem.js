import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

const ExpenseItem = (props) => {
  return (
    <div className="w-full">
      <Card className="flex justify-start bg-slate-500 text-white  mx-2">
        <div className="flex justify-between  p-2 gap-2 w-full items-center">
          <div className="flex items-center gap-2">
            <ExpenseDate date={props.date}/>
            <h2 className="font-semibold">{props.title}</h2>
          </div>
          <div className="flex bg-white p-1 rounded-md text-slate-500 cursor-pointer">
            <small>${props.amount}</small>
          </div>
        </div>
      </Card>
      
    </div>
  );
}
export default ExpenseItem;
