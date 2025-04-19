import { useMemo, useState } from 'react'

export default function UseMemoExp(){
    const[count,setCount] = useState(0);
    const[input,setInput] = useState(0);

    function expensiveTask(num){
        console.log("inside expensivce task");
        for(let i=0;i<=1000000000;i++){}
        return num*2;
    }

    let doubleValue = useMemo(()=> expensiveTask(input),[input]);

    //1st param is a function which will be rendered only on dependency change
    //if input doest change function won't render unnecessarily again.
    // only the LAST input value calculation is stored.

    return(
        <div>
            <button onClick={()=>setCount(count+1)} >Increment</button>
            {count}
            <input type='number' placeholder='enter number to double up' value={input}
            onChange={(e)=>setInput(e.target.value)} />
            <div>Double: { doubleValue } </div>
        </div>
    )
}