/*
// creation of context -> React.createContext()

<AppContext.Provider value={}> // theme
    -----
    -----
    -----
    -----
</AppContext.Provider>

<AppContext.Consumer>
---(value)=>{
    <div></div>
}
</AppContext.Consumer>

useContext(AppContext)

Mounting - componentDidMount, constructor, getDerivedStateFromProps, componentWillMount - useState, useEffect()
Update - useEffect()
Unmounting

React.useEffect(()=>{

}) - Rerender everytime whenever there is a state update.

React.useEffect(()=>{

},[]) // called twice in react 18 and once before react 18

React.useEffect(()=>{

},[deps]) // whenever the deps would change the useEffect will be called.
*/
import React from "react";
const Stopwatch = () => {
    const [timer, setTimer] = React.useState(0);
    const [ isRunning, setIsRunning] = React.useState(false);
    const intervalId = React.useRef(null);
    const handleStart = () => {
        setIsRunning(true);
    }
    // getData
    React.useEffect(() => {
        if (isRunning) {
            intervalId.current = setInterval(() => {
                setTimer((timer) => timer + 1);
            }, 1000);
        } else {
            clearInterval(intervalId.current)
        }
    },[isRunning]);

    const handlePause = () => {
        setIsRunning(false);
    }

    return (
        <>
            <div>Timer is {timer}</div>
            <button ref={intervalId} disabled={isRunning} onClick={handleStart}>Start</button>
            <button disabled={!isRunning} onClick={handlePause}>Pause</button>
        </>
    )

}

export default Stopwatch

// useEffect, useRef, useState, useContext
// useCallback, useMemo, useLayoutEffect, useImperativeHandle
// custom hook using React functional component.