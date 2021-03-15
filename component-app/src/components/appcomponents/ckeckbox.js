
function CheckBox(props){


    return (
        <checkbox 
        style={{backgroundColor: props.color}}> 
        
        {props.text} 
        
        </checkbox>
    )
}


export default CheckBox;