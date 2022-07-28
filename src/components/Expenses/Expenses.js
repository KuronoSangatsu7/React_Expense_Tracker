import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
