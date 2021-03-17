 function ButtonComponent (props){
     return(
         <div>
             <button 
        style= {{backgroundColor: props.color}} > Submit
            {props.text}
        </button>
         </div>
     )
 }
export default ButtonComponent