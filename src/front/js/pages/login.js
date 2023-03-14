import React from "react";
import { useEffect, useState } from "react";

export const Login = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("") 

const handleEmail = (ev) => {
    setEmail(ev.target.value)
}

const handlePassword = (ev) => {
    setPassword(ev.target.value)
}

    return(
        <div className="container col-lg-6 needs-validation">
            <h1>Log In</h1>
            <form className="mt-3" method="POST">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="EmailForm">E-mail Adress</label>
                        <input type="email" className="form-control" id="EmailForm" placeholder="JohnDoe@example.com" onInput={handleEmail} required></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="PasswordForm">Password</label>
                        <input type="password" className="form-control" id="PasswordForm" onInput={handlePassword} required></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Log In</button> 
            </form>
        </div>
    )
}