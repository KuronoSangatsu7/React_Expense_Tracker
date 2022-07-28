import FullWrapper from "./components/UI/FullWrapper";
import AppWrapper from "./components/UI/AppWrapper";
import Chart from "./components/Chart/Chart";
import Expenses from "./components/Expenses/Expenses";
import Header from "./components/UI/Header";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import { useEffect, useState } from "react";

const App = () => {
  const [selectedYear, setSelectedYear] = useState(2022);
  const [expenses, setExpenses] = useState([]);
  const [displayedExpenses, setDisplayedExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [...prevState, expense];
    });
  };

  const filterChangeHandler = (newSelection) => {
    setSelectedYear(newSelection);
  };

  useEffect(() => {
    setDisplayedExpenses(
      expenses.filter((expense) => expense.date.getFullYear() == selectedYear)
    );
  }, [selectedYear, expenses]);

  return (
    <>
      <FullWrapper>
        <Header />
        <AppWrapper>
          <NewExpense onAddExpense={addExpenseHandler} />
          <ExpenseFilter
            selected={selectedYear}
            onChangeFilter={filterChangeHandler}
          />
          <Chart />
          <Expenses items={displayedExpenses} />
          <div className="flex flex-row-reverse">
            <button className="bg-gray-200 font-medium text-lg py-2 px-4 mt-2 rounded-md">
              New Expense
            </button>
          </div>
        </AppWrapper>
      </FullWrapper>
    </>
  );
};

export default App;
