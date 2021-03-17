
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0)

    function sum(){
        setCount(count+1)
    }

    function subtract(){
        setCount(count-1)
    }
    
    function multiply(){
        setCount(count*2)
    }

    function division(){
        setCount(count/2)
    }

    function surds(){
        setCount(Math.sqrt(count))
    }

    return(
        <div>
            

            <h1>Counter</h1>
            <h1>Username</h1>
            {count}
            <button onClick={sum}>Increase</button>
            <button onClick={subtract}>Deduce</button>
            <button onClick={multiply}>Multiply</button>
            <button onClick={division}>Divide</button>
            <button onClick={surds}>Square</button>


        </div>
    )
}
export default Counter;