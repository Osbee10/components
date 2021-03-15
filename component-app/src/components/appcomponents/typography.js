function Typography(props){


    return (
        <typography 
        style={{backgroundColor: props.color}}> 
        
        {props.text} 
        
        </typography>
    )
}


export default Typography;