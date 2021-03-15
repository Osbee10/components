import DetailComponent from '../components/detailcomponent'

function NotificationComponent(props){
    return (
        <DetailComponent
        firstname={props.firstname} 
        lastname={props.lastname} 
        email={props.email}
        dateofbirth={props.dateofbirth}
        mobile={props.mobile}
         />
    )
}
export default NotificationComponent