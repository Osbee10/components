function TextArea(props){


    return (
        <textarea 
        style={{backgroundColor: props.color}}> 
        
        {props.text} 
        
        </textarea>
    )
}


export default TextArea;