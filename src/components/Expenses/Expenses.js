import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {



  return (
    <div>
      {props.items.length === 0 && <p className="m-2 text-white font-semibold">No expenses in this year.</p>}
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
