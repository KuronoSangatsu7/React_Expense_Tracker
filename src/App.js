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
          <Chart />
          <Expenses items={expenses}/>
        </AppWrapper>
      </FullWrapper>
    </>
  );
};

export default App;
