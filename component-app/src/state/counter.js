import React, { useState } from 'react';



function Counter(){


   
    const [count, setCount] = useState(2)
    // const [color, setCount] = useState("yellow")
    // const [username, setUsername] = useState(0)
    // const [password, setPassword] = useState()


    // function sum(){
    //     setCount(count+1)
    //     // setCount(color == "red" ? 'yellow' : 'red')
    // }

    // function subtract(){
    //     setCount(count-1)
    // }

    // function multiply(){
    //     setCount(count*1)
    // }

    // function division(){
    //     setCount(count/1)
    // }

    function square(){
        setCount(Math.sqrt(count))
    }


    

    return (
        <div>
        <h1>Counter</h1>
        { count }


         {/* if you want to change a state  */}
        {/* <button onClick={ () => setCount (count+1)}>Change State Variable</button> */}
        {/* <button style={{background: color}} onClick={ sum }>Add</button> */}
        {/* <button onClick={ sum }>Add</button>
        <button onClick={ subtract }>Subtract</button>
        <button onClick={ multiply }>Multiply</button>
        <button onClick={ division }>Deduce</button> */}
        <button onClick={ square }>Square</button>

        </div>
    ) 
}

export default Counter;