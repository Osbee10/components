import NotificationComponent from '../components/notification'

function ProfileComponent(props){
    return (
        < NotificationComponent 
        firstname={props.firstname} 
        lastname={props.lastname} 
        email={props.email}
        dateofbirth={props.dateofbirth}
        mobile={props.mobile}
         />
    );
}
export default ProfileComponent
