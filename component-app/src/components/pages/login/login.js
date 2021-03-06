import React, { useState } from 'react';
// import ',/login.css'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    function updateUsername(e){
        setUsername(e.target.value)
    }

    function updatePassword(e){
        setPassword(e.target.value)
    }

    function submit(e){
        e.preventDefault()


        // send the username and password to the server

        fetch('goggle.com',{username,password})
        .then(response => {

        },err => err)

    }


    return(
        <form>
            <div className="form-group">
                <label htmlFor="">Username</label>
                <input type="text" value={username} onChange={updateUsername} class="form-control"/>
            </div>

            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" value={password} onChange={updatePassword} class="form-control"/>
            </div>

            <button className="login-btn" onClick={submit}>Login</button>
            <button className="cancel-btn">Cancel</button>
        </form>
    )
}


export default Login;