import React from '.react'

function Brown(){
    const[Count, setCount]=useState(0)

    function Add (){
        setCount(Count+1)
    }

    return(
        <div>
            <h1> brown's component</h1>
            {Count}

            <button onClick={Add}>Click me to count</button>


        </div>
    )
}

export default Brown;