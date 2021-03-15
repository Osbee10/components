function InputField(props){


    return (
        <input_field 
        style={{backgroundColor: props.color}}> 
        
        {props.text} 
        
        </input_field>
    )
}


export default InputField;