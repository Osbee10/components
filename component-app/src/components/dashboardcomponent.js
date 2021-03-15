function DashboardComponent(props){
    return (
        <div>
           <h1>Firstname: {props.firstname} </h1> 
           <h1>Lastname: {props.lastname}</h1>
           <h1>Email {props.email}</h1>
           <h1>Date of birth: {props.dateofbirth}</h1>
           <h1>Mobile: {props.mobile}</h1>

        </div>
    );
}
export default DashboardComponent
