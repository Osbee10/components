function ChildComponent(props){
    return(
        <div>
           <h1>Child Component</h1> 
           <h1>Name: {props.childname}</h1>
           <h2>Gender:{props.childgender}</h2>
           <h2>Age: {props.childage}</h2>
           <h2>Email: {props.childemail}</h2>
        </div>
    )
}
export default ChildComponent