const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="container border rounded-md text-center bg-gray-200 text-xs py-2">
      <div>{day}</div>
      <div>{month}</div>
    </div>
  );
};

export default ExpenseDate;
