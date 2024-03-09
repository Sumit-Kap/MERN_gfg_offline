import './App.css';

import { bankruptcy, deposit, withdrawl } from "./store/action/action";
import { useDispatch, useSelector } from "react-redux"

function App() {
  const dispatch = useDispatch();
  const money = useSelector(state => state.banking.money)
  return (
    <div className="App">
      <div>money is {money}</div>
      <button onClick={() => dispatch(deposit('DEPOSIT',1000))}>Deposit</button>
      <button onClick={() => dispatch(withdrawl('WITHDRAWL',100))}>withdrawl</button>
      <button onClick={() => dispatch(bankruptcy('BANKRUPTCY'))}>Bankruptcy</button>
    </div>
  );
}

// mapStateToProps
// mapDispatchToProps
// connect()
export default App;
