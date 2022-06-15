import "./Register.css"
import {
    Link
    } from "react-router-dom";

export default function Register() {
    return (
    <div className="register">
        <span className="register-title">Register</span>
        <form className="register-form" action="">
            <label htmlFor="">Username</label>
            <input className="register-input" type="text" placeholder="Enter your username..." />
            <label htmlFor="">E-mail</label>
            <input className="register-input" type="text" placeholder="Enter your email..." />
            <label htmlFor="">Password</label>
            <input className="register-input" type="password" placeholder="Enter your password..." />
            <button className="register-button">Register</button>
        </form>
        <button className="login-button">
        <Link style={{textDecoration:"none",color:"inherit"}} to="/register">LOGIN</Link>
        </button>
    </div>
    )
}
