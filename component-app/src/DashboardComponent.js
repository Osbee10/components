

function DashboardComponent(props){
    return (
      <div>
         <h1>DashboardComponent</h1>
         first_name= {props.first_name}
            last_name= {props.last_name}
            email=  {props.email}
            date_of_birth=  {props.date_of_birth}
            mobile= {props.mobile}/>
      </div>
        
      );
}
export default DashboardComponent