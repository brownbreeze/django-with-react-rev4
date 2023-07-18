// import { App } from "antd";
import React, { createContext, useState, useReducer } from "react" ;

const INCREMENT = "COUNTER/INCREMENT";
const DECREMENT = "COUNTER/DECREMENT";

const CounterContext = createContext();

const reducer = (prevState, action) => {
    const { type } = action;
    if ( type === INCREMENT ){
        return prevState +1;
    } else {
        return prevState -1;
    }
    return 
};

const App9 = () => {
    const [state, dispatch] = useReducer(reducer , 0);

    // const [value, setValue] = useState(0);

    return(
        <div>
            <h1 onClick={() => dispatch({type:DECREMENT})}>App9 {state}</h1>
            <CounterContext.Provider value={{state, dispatch}}>
                <GameBox/>
            </CounterContext.Provider>
        </div>
    )

};

const actionIncrement = () => ({ type:INCREMENT });
const actionDecrement = () => ({ type:DECREMENT});


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