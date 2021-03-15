import ChildComponent from './childcomponent'

function ParentComponent(props){
    return(
        <div>
           <h1>Parent Component</h1>            
           <ChildComponent name={props.name} gender={props.gender} age={props.age} email={props.email}/>
        </div> //instead of div you can use empty tags <> & </>
    )
}
export default ParentComponent