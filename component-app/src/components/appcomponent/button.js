function Buttom(props){
    return(
        <button 
        style= {{backgroundColor: props.color}}
        onClick={props.onclickbutton} >
            {props.text}
        </button>
    )
}
export default Buttom