import FullWrapper from "./components/UI/FullWrapper";
import AppWrapper from "./components/UI/AppWrapper";
import Chart from "./components/Chart/Chart";
import Expenses from "./components/Expenses/Expenses";
import Header from "./components/UI/Header";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import NewExpenseButton from "./components/NewExpense/NewExpenseButton";
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

  console.log(expenses, displayedExpenses)

  return (
      <FullWrapper>
        <Header />
        <AppWrapper>
          <NewExpense onAddExpense={addExpenseHandler} />
          <ExpenseFilter
            selected={selectedYear}
            onChangeFilter={filterChangeHandler}
          />
          <Chart expenses={displayedExpenses}/>
          <Expenses items={displayedExpenses} />
          <NewExpenseButton />
        </AppWrapper>
      </FullWrapper>
  );
};

export default App;
