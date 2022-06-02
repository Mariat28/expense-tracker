//stateless/presentational/dumb components
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
const ExpenseItem = (props) => {

  return (
    <div className="w-full">
      <Card className="flex justify-start bg-slate-500 text-white  mx-2">
        <div className="flex justify-between  p-2 gap-2 w-full items-center">
          <div className="flex items-center gap-2">
            <ExpenseDate date={props.date}/>
            <div>{props.title}</div>
          </div>
          <div className="flex  p-1 rounded-md text-slate-500 cursor-pointer items-center gap-2">
            <small className='bg-purple-900 text-white p-1 rounded-md border-white border cursor-pointer'>${props.amount}</small>
          </div>
        </div>
      </Card>
      
    </div>
  );
}
export default ExpenseItem;
