import ChildComponent from '../components/childcomponent'

function ParentComponent(props){
    return(
        <div>
           <h1>Parent Component</h1>            
           <ChildComponent 
           childname={props.name} 
           childgender={props.gender} 
           childage={props.age} 
           childemail={props.email}/>
        </div> //instead of div you can use empty tags <> & </>
    )
}
export default ParentComponent