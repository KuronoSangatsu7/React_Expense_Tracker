const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="container border rounded-md bg-gray-200 text-xs py-2">
      <div className="text-center">{day}</div>
      <div className="text-center font-semibold">{month}</div>
    </div>
  );
};

export default ExpenseDate;
