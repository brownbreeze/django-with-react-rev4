// import { App } from "antd";
import React, { createContext, useState, useContext, useReducer } from "react" ;

const INCREMENT = "COUNTER/INCREMENT";
const DECREMENT = "COUNTER/DECREMENT";

const CounterContext = createContext();

const reducer = (prevState, action) => {
    const { type, payload: value = 1 } = action;
    if ( type === INCREMENT ){
        return prevState + value ;
    } else {
        return prevState - value;
    }
    return prevState;
};

const App9 = () => {
    const [state, dispatch] = useReducer(reducer , 0);

    // const [value, setValue] = useState(0);

    return(
        <div>
            <h1 onClick={() => dispatch(actionDecrement())}>App9 {state}</h1>
            <CounterContext.Provider value={{ state, dispatch }}>
                <GameBox/>
            </CounterContext.Provider>
        </div>
    )

};

const actionIncrement = (value) => ({ payload: value, type:INCREMENT });
const actionDecrement = (value) => ({ payload: value, type:DECREMENT});


const GameBox = () => {
    const {state: countValue, dispatch} = useContext(CounterContext);
    const onClick = () =>{
        dispatch({type:INCREMENT});
    };
    return (
        <div>
            <h2>Game Box </h2>
            <button onClick={onClick}>{countValue}</button>
        </div>
    )
};

export default App9;