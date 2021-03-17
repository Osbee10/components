import NotificationComponent from '../components/notification'

function ProfileComponent(props){
    return (
        < NotificationComponent 
        firstname={props.firstname} 
        lastname={props.lastname} 
        email={props.email}
        dateofbirth={props.dateofbirth}
        mobile={props.mobile}
        //you can use props={props} through out
         />
    );
}
export default ProfileComponent
