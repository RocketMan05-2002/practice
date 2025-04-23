// usememo se we can avoid unnecessary calculations. performance optimization.
// memo - memoization
// agar aapke paas koi problem statement aati h, agar wo pehle se solved nhi h toh solve karlo 
// aur answer ko store karlo
// if its solved alerady, dont do calculations again, the answer is stored already.
// sometimes we have expensive operations in our application
// unko prevent karneka ka kaam -> useMemo hook karta hein

import { useState } from 'react'

export default function UseMemoExp(){
    const[count,setCount] = useState(0);
    const[input,setInput] = useState(0);

    function expensiveTask(num){
        console.log("inside expensivce task");
        for(let i=0;i<=1000000000;i++){}
        return num*2;
    }

    let doubleValue = expensiveTask(input);

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

// flow -> Button pe click -> setCount(count+1) => count state variable updates => component re renders
// whenever component re renders this entire code will run over again.
// expensice task dobara call horaha h,
// loop of 0 -> 100 cr. and this task makes my entire process slow.
// value will always be same. thus an unnecessary calculation
