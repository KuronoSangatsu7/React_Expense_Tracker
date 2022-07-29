import TransparentWrapper from "../UI/TransparentWrapper";

import { useState } from "react";

const NewExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      id: Math.random(),
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };

    props.onAddExpense(newExpense);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <div className="mb-4">
      <TransparentWrapper>
        <form onSubmit={submitHandler}>
          <div className="flex flex-wrap lg:grid grid-cols-2 grid-rows-5 gap-3 m-2 text-gray-200 font-medium mt-0">
            <label className="col-span-2 my-auto">Title:</label>
            <input
              className="col-span-2 flex-auto w-full rounded-md text-black font-medium p-2"
              value={enteredTitle}
              onChange={titleChangeHandler}
              type="text"
              required
            ></input>
            <label>Date: </label>
            <input
              className="rounded-md text-black font-medium p-2 w-full"
              value={enteredDate}
              onChange={dateChangeHandler}
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              required
            ></input>
            <label>Amount:</label>
            <input
              className="rounded-md flex-auto w-full text-black font-medium p-2"
              value={enteredAmount}
              onChange={amountChangeHandler}
              type="number"
              min="0.01"
              step="0.01"
              required
            ></input>
            <button
              className=" col-start-2 ml-auto bg-violet-600 p-2 rounded-md hover:translate-y-1 hover:scale-110 hover:bg-violet-800 focus:ring-4 focus:ring-black transition-all duration-150"
              type="submit"
            >
              Add Expense
            </button>
          </div>
        </form>
      </TransparentWrapper>
    </div>
  );
};

export default NewExpense;
