import React, { useReducer } from 'react'

    const initialState = {count:0}

    function countReducer(state, action){
        switch(action.type){
            case 'INCREAMENT':
                return {count : (state.count+1)}
            case 'DECREAMENT':
                return {count : state.count-1}
            case 'RESET':
                return {count : 0}
            default:
                return state
        }
    }


const CounterReducer = () => {
    const [state, dispatch] = useReducer(countReducer, initialState)
  return (
    <>
    <div>CounterReducer</div>
    <h3>Count:{state.count}</h3>
    <button onClick={()=>dispatch({type:'INCREAMENT'})}>Increament</button>
    <button onClick={()=>dispatch({type:'DECREAMENT'})}>Decreament</button>
    <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
</>
  )
}

export default CounterReducer