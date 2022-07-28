import Wrapper from "./components/UI/Wrapper";
import Expenses from "./components/Expenses/Expenses";
import Header from "./components/UI/Header";

const App = () => {
  return <>
  <Header></Header>
  <Wrapper>
    <Expenses />
  </Wrapper>
  </>
};

export default App;
