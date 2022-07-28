import FullWrapper from "./components/UI/FullWrapper";
import AppWrapper from "./components/UI/AppWrapper";
import Chart from "./components/Chart/Chart";
import Expenses from "./components/Expenses/Expenses";
import Header from "./components/UI/Header";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [...prevState, expense];
    });
  };

  return (
    <>
      <FullWrapper>
        <Header />
        <AppWrapper>
          <NewExpense onAddExpense={addExpenseHandler} />
          <div className="flex flex-row-reverse">
            <select className="bg-gray-200 font-normal text-lg py-1 px-2 mb-4 rounded-md">
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
            </select>
          </div>
          <Chart />
          <Expenses items={expenses} />
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
