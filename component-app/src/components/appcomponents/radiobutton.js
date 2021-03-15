function RadioButton(props){


    return(

        <radiobutton 
        style={{backgroundColor:props.color}}>
            {props.text}
        </radiobutton>
    )
}

export default RadioButton;
