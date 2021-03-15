import DashboardComponent from '../components/dashboardcomponent'

function DetailComponent(props){
    return(
        <DashboardComponent 
        firstname={props.firstname} 
        lastname={props.lastname} 
        email={props.email}
        dateofbirth={props.dateofbirth}
        mobile={props.mobile}
         />
    )

}
export default DetailComponent
 