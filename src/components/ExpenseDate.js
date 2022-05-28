function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="flex flex-col items-center bg-white text-slate-500 p-2 rounded-lg shadow-md w-20">
      <small className="text-base font-semibold">{month}</small>
      <small>{year}</small>
      <small>{day}</small>
    </div>
  );
}
export default ExpenseDate;
