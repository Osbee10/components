function SelectOption(props){


    return(

        <selectoption
        style={{backgroundColor:props.color}}>
            {props.text}
        </selectoption>
    )
}

export default SelectOption;