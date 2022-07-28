const ExpenseFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="flex flex-row-reverse">
      <select
        value={props.selected}
        onChange={dropDownChangeHandler}
        className="bg-gray-200 font-normal text-lg py-1 px-2 mb-4 rounded-md"
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
