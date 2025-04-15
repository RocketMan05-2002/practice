import { createContext } from "react"
import B from "./B";

const GreetContext = createContext();

export default function A(){
    const greet= "Hello";
    const greet2 = "Abhi";
    return(
        <GreetContext.Provider value={{ greet,greet2 }}>
            <B />
        </GreetContext.Provider>
    )
}

export {GreetContext}