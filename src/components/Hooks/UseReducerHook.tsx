import React, { useReducer } from 'react'


const initialState = { count: 0 };

type stateProp = {
    count:number
}

type updateState = {
    type:'INCREMENT' | 'DECREMENT'
    payload:number 
}

type ResetState = {
    type:'RESET'
}
// Disceminent Union
type actionProp = updateState | ResetState


const reducer = (state:stateProp,action:actionProp) =>{
    switch(action.type){
        case "INCREMENT":
         return {count:state.count + action.payload}
         break;
        case "DECREMENT":
         return {count:state.count - action.payload}
         break;
        case "RESET":
         return initialState
         break;
        default:
            return state;
    }
}
const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
       <p>COUNT: {state.count}</p>
        <button onClick={()=> dispatch({type:"INCREMENT",payload:10})}>Incre</button>
        <button onClick={()=> dispatch({type:"DECREMENT",payload:10})}>Decre</button>
        <button onClick={()=> dispatch({type:"RESET"})}>Reset</button>
    </div>
  )
}

export default UseReducerHook