function Navbar(props){
    return(
        <div class='nav'>
            <nav style= {{backgroundColor: props.color}} >
        <h3>{props.text}</h3>
        </nav>
            
        </div>
    )
}
export default Navbar