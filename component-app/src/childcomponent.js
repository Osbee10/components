function ChildComponent(props){
    return(
        <div>
           <h1>Child Component</h1> 
           <h1>Name: {props.name}</h1>
           <h2>Gender:{props.gender}</h2>
           <h2>Age: {props.age}</h2>
           <h2>Email {props.email}</h2>
        </div>
    )
}
export default ChildComponent