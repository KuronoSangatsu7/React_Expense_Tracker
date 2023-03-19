import ExpenseItem from "./ExpenseItem";
import styles from './Expenses.module.css'

const Expenses = (props) => {



  return (
    <div className={`overflow-y-scroll max-h-64 mt-4 overflow-x-clip scroll-smooth snap-y ${styles.noscroll}`}>
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
