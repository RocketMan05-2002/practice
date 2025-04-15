import React, { useContext } from 'react'
import {GreetContext} from './index'

const C = () => {
    const useCon  = useContext(GreetContext);
  return (
    <div>
        <h1>Greetings, {useCon.greet} {useCon.greet2} </h1>
    </div>
  )
}

export default C
