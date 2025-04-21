import { useCallback, useState } from "react"
import ChildComp from "./ChildComp";


export default function UseContextExp(){
    const[count,setCount] = useState(0);

    const handleClick = useCallback(() =>{
            setCount(count+1);
    },[count]);

    return(
        <div>
            Count: {count}
            <br/>
            <button onClick={handleClick}>Increment</button> <br/>
            <ChildComp buttonName={"Clickme"} handleClick={handleClick}/>
        </div>
    )
}