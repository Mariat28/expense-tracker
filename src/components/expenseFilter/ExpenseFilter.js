//controlled component i.e all logic is controlled or managed by the parent component
import { useState } from "react";
const ExpenseFilter = (props) => {
  const filterItems = ['2022','2021', '2020', '2019' ];
  const [selectedYear, setSelectedYear] = useState('');
  const [isFilter, setIsFilter] = useState(false);
  const filterDisplayHandler = () =>{
    setIsFilter(!isFilter);
  }
  const filterItemChangeHandler = (event) => {
    setSelectedYear(event.target.value);
    props.onFilterItemChange(event.target.value);
    setIsFilter(!isFilter);

  }
  return(
    <div className="relative">
      <div className="flex items-center border border-gray-300 shadow bg-white mb-2 rounded-lg">
        <input type="text" className="p-2 border-none focus:outline-none rounded-lg" value={props.selectedYear} readOnly onFocus={filterDisplayHandler}/>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isFilter ? (<div className="max-h-40  h-40 flex flex-col w-full rounded-lg absolute shadow-xl">
        {filterItems.map((item,index) => <input type="text" className="p-2 border-none focus:outline-none bg-white hover:bg-gray-200 cursor-pointer hover:shadow-xl hover:rounded--b-md" value={item} key={index} readOnly onClick={filterItemChangeHandler}/>)}
      </div>) : ''}
      
    </div>
  )
}
export default ExpenseFilter;