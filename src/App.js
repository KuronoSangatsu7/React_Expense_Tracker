import FullWrapper from "./components/UI/FullWrapper";
import AppWrapper from "./components/UI/AppWrapper";
import Chart from "./components/Chart/Chart";
import Expenses from "./components/Expenses/Expenses";
import Header from "./components/UI/Header";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 1, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <>
      <FullWrapper>
        <Header />
        <AppWrapper>
          <div className="flex flex-row-reverse">
            <select className="bg-gray-200 font-normal text-lg py-1 px-2 mb-4 rounded-md">
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            </select>
          </div>
          <Chart />
          <Expenses items={expenses}/>
          <div className="flex flex-row-reverse">
            <button className="bg-gray-200 font-medium text-lg py-2 px-4 rounded-md">Add Expense</button>
          </div>
        </AppWrapper>
      </FullWrapper>
    </>
  );
};

export default App;
