import './App.css';

import { bankruptcy, deposit, fetchUsers, withdrawl } from "./store/action/action";
import { useDispatch, useSelector } from "react-redux"

import React from "react";

const initialState = {
  money: 0
}

const bankingReducer = (state = initialState, action) => {
  console.log("dispatch an action", JSON.stringify(action));
  switch (action.type) {
    case 'DEPOSIT':
        return {
            ...state,
            money: state.money + action.payload
        }
        case 'WITHDRAWL':
            return {
                ...state,
                money: state.money - action.payload
            }
            case 'BANKRUPTCY':
                return {
                    ...state,
                    money: 0
                }
    default:
        return state;
}
}

function App() {
  const [state, dispatch] = React.useReducer(bankingReducer,initialState);
  const dispatchStore = useDispatch();
  console.log("printing state", state);
  const money = state.money;
  const actualState = useSelector(state => state)
  console.log("print  users",actualState);
  return (
    <div className="App">
      <div>money is {money}</div>
      <button data-testid="deposit" onClick={() => dispatch({ type: 'DEPOSIT', payload: 1000})}>Deposit</button>
      <button onClick={() => dispatch({ type: 'WITHDRAWL', payload: 100 })}>withdrawl</button>
      <button onClick={() => dispatch('BANKRUPTCY')}>Bankruptcy</button>
      <button onClick={() =>  dispatchStore(fetchUsers('GET_USERS'))}>Get Users</button>
      {actualState?.banking?.users && actualState?.banking?.users?.map((user) => (
        <div>{user.title}</div>
      ))}
    </div>
  );
}

// mapStateToProps
// mapDispatchToProps
// connect()
export default App;
