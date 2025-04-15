// code to learn useReducer
import { useReducer } from "react"

const reducer = (state,action) =>{
    if(action.type === "incr"){
        return{count: state.count+1};
    }
    else if(action.type === "decr"){
        return{count: state.count-1};
    }
    else{
        throw new Error('Unsupported action type')
    }
}

export default function Counter(){
    const [state,dispatch] = useReducer(reducer,{count:0});

    const handleIncr = () =>{
        dispatch({type:"incr"})
    }
    const handleDecr = () =>{
        dispatch({type:"decr"})
    }

    return(
        <div>
            {state.count}
            <button onClick={handleIncr}>+</button>
            <button onClick={handleDecr}>-</button>
        </div>
    )
}