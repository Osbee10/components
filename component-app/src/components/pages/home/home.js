import React, {useState} from 'react'
import Buttom from '../../appcomponent/button'
import Navbar from '../../appcomponent/navbar'

function Home(){

    const [color,setcolor]= useState('gray')
    const [text,settext]= useState('hello')
    
    
    function changecolortext(){
         setcolor('red')
         settext('good')
     }


    return(
        <div>
            <Navbar text='Whizzy Academy' />
            <h1>Home</h1>
            <Buttom text='yes' color='green' />
            <Buttom text='nice' color='brown' />
            <Buttom text='great' color='orange' />

            <Buttom text={text} color={color} onclickbutton={changecolortext} />
            
         </div>
    )
}
export default Home