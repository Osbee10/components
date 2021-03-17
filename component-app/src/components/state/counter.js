import React, {useState} from 'react'

function Counter(){

    const [count,setCount] = useState(0)
    const {string,setString} = useState('Hello')
    // const [username,setUsername] = useState()
    // const [password,setpassword] = useState()
    function sum(){
        setCount(count+1)
    }    
// OR
//     const sum=()=>{
//         setCount(count+1)
// }
    function sub(){
    setCount(count-1)
    }
    function Type(){
        setCount('Hello')
        }

    return (<div>
        
        <h1>Counter</h1>
        {count}

        <button onClick={ sum }>Submit</button>  
        <button onClick={ sub }>Load</button>
        <button onClick={ Type }>kk</button>

    </div>
    )
}
export default Counter;