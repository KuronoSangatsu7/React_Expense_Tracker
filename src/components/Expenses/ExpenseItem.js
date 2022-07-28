import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="container md:grid md:grid-cols-12 flex flex-wrap pl-2 border-0 border-l-4 border-violet-400 my-5">
    <div className="col-span-1">
      <ExpenseDate date={props.date} />
      </div>
      <div className="col-span-9 text-white font-medium ml-2 my-auto">{props.title}</div>
      <div className="col-span-2 text-rose-600 text-right my-auto font-semibold">${props.amount}</div>
    </div>
  );
};

export default ExpenseItem;
