
const ExpenseFilter = (props) => {
  const filterItemChangeHandler = (event) => {
    props.onFilterItemChangeHandler(event.target.value);
  }
  return(
    <div className="bg-white">
      {/* <div className="flex items-center border border-gray-300 shadow">
        <input type="text" className="p-2 border-none focus:outline-none bg-white" readOnly/>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div> */}
      <div className='p-2'>
        <label>Filter by year:</label>
        <select onChange={filterItemChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
}
export default ExpenseFilter;